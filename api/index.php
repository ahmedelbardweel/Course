<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

// --- Vercel Serverless Bootstrap for Laravel ---
// Make /tmp writable directories for Laravel
$tmpDirs = [
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
    '/tmp/bootstrap',
    '/tmp/bootstrap/cache',
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// Define base path
$basePath = dirname(__DIR__);

// Override bootstrap/cache to use /tmp
if (!function_exists('app_bootstrap_path')) {
    define('APP_BOOTSTRAP_CACHE_PATH', '/tmp/bootstrap/cache');
}

// Set LARAVEL_START
define('LARAVEL_START', microtime(true));

// Check maintenance mode
if (file_exists($maintenance = $basePath . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Load Composer autoloader
require $basePath . '/vendor/autoload.php';

// Bootstrap Laravel application
$app = require_once $basePath . '/bootstrap/app.php';

// Override storage and cache paths for Vercel
$app->useStoragePath('/tmp/storage');
$app->useBootstrapPath('/tmp/bootstrap');

use Illuminate\Http\Request;
$app->handleRequest(Request::capture());
