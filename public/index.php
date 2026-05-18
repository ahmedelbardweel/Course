<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

// Prepare storage directory in /tmp if running in Vercel serverless environment
if (isset($_ENV['VERCEL']) || isset($_SERVER['VERCEL']) || isset($_ENV['VERCEL_ENV']) || isset($_SERVER['VERCEL_ENV'])) {
    $app->useStoragePath('/tmp/storage');
    
    // Ensure the cache, session, and view directories exist in /tmp
    $storageDirs = [
        '/tmp/storage',
        '/tmp/storage/app',
        '/tmp/storage/app/public',
        '/tmp/storage/framework',
        '/tmp/storage/framework/cache',
        '/tmp/storage/framework/cache/data',
        '/tmp/storage/framework/sessions',
        '/tmp/storage/framework/testing',
        '/tmp/storage/framework/views',
        '/tmp/storage/logs',
    ];
    foreach ($storageDirs as $dir) {
        if (!file_exists($dir)) {
            mkdir($dir, 0755, true);
        }
    }
}

$app->handleRequest(Request::capture());
