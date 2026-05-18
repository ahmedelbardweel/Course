<?php

namespace App\Http\Controllers;

use App\Models\Interaction;
use Illuminate\Http\Request;

class InteractionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string',
            'interactionable_id' => 'nullable|integer',
            'interactionable_type' => 'nullable|string',
            'metadata' => 'nullable|array',
        ]);

        Interaction::create([
            'user_id' => auth()->id() ?? 1, // Fallback to user 1 for demo if guest
            'interactionable_id' => $request->interactionable_id,
            'interactionable_type' => $request->interactionable_type,
            'type' => $request->type,
            'metadata' => $request->metadata,
        ]);

        return response()->json(['status' => 'success']);
    }
}
