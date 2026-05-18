<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->boolean('allow_study_rooms')->default(true)->after('is_published');
            $table->boolean('allow_timed_comments')->default(true)->after('allow_study_rooms');
        });
    }

    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn(['allow_study_rooms', 'allow_timed_comments']);
        });
    }
};
