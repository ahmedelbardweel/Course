<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;
use App\Models\LessonNote;

class LessonNoteController extends Controller
{
    public function index(Lesson $lesson)
    {
        return $lesson->notes()->where('user_id', auth()->id())->latest()->get();
    }

    public function store(Request $request, Lesson $lesson)
    {
        $validated = $request->validate([
            'content' => 'required|string',
            'timestamp' => 'nullable|integer'
        ]);

        $note = $lesson->notes()->create([
            'user_id' => auth()->id(),
            'content' => $validated['content'],
            'timestamp' => $validated['timestamp']
        ]);

        return response()->json($note);
    }

    public function destroy(LessonNote $note)
    {
        if ($note->user_id !== auth()->id()) {
            abort(403);
        }

        $note->delete();
        return response()->json(['success' => true]);
    }

    public function export(Lesson $lesson)
    {
        $notes = $lesson->notes()->where('user_id', auth()->id())->orderBy('timestamp')->get();
        
        // Simplified export for now: return text content
        $output = "ملاحظات درس: " . $lesson->title . "\n\n";
        foreach ($notes as $note) {
            $time = gmdate("H:i:s", $note->timestamp);
            $output .= "[$time] " . $note->content . "\n";
            $output .= "------------------------\n";
        }

        return response($output)
            ->header('Content-Type', 'text/plain')
            ->header('Content-Disposition', 'attachment; filename="notes.txt"');
    }
}
