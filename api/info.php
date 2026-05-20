<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

// Make /tmp writable directories for Laravel diagnostics
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

$basePath = dirname(__DIR__);

// Override bootstrap/cache to use /tmp
if (!function_exists('app_bootstrap_path')) {
    define('APP_BOOTSTRAP_CACHE_PATH', '/tmp/bootstrap/cache');
}

echo '<div style="font-family: sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; line-height: 1.5;">';
echo '<h2 style="color: #2563eb;">Laravel on Vercel Diagnostics</h2>';
echo '<hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;">';

echo '<h3>System Information</h3>';
echo '<ul>';
echo '<li>PHP Version: <strong>' . phpversion() . '</strong></li>';
echo '<li>Vendor Autoload: ' . (file_exists($basePath . '/vendor/autoload.php') ? '<span style="color:green;">✅ EXISTS</span>' : '<span style="color:red;">❌ MISSING</span>') . '</li>';
echo '<li>APP_KEY: ' . (getenv('APP_KEY') ? '<span style="color:green;">✅ CONFIGURED</span>' : '<span style="color:red;">❌ NOT CONFIGURED</span>') . '</li>';
echo '<li>DB_CONNECTION: <strong>' . (getenv('DB_CONNECTION') ?: 'not set') . '</strong></li>';
echo '<li>DB_HOST: <strong>' . (getenv('DB_HOST') ?: 'not set') . '</strong></li>';
echo '<li>DB_DATABASE: <strong>' . (getenv('DB_DATABASE') ?: 'not set') . '</strong></li>';
echo '<li>/tmp Directory Writable: ' . (is_writable('/tmp') ? '<span style="color:green;">✅ YES</span>' : '<span style="color:red;">❌ NO</span>') . '</li>';
echo '</ul>';

echo '<h3>Public Build Directory Listing</h3>';
$buildPath = $basePath . '/public/build';
if (is_dir($buildPath)) {
    echo '<p>Build directory exists: <strong>' . $buildPath . '</strong></p>';
    $files = scandir($buildPath);
    echo '<ul>';
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        $fullFile = $buildPath . '/' . $file;
        echo '<li>' . htmlspecialchars($file) . (is_dir($fullFile) ? ' (DIR)' : ' (FILE)') . '</li>';
        if (is_dir($fullFile)) {
            $subFiles = scandir($fullFile);
            echo '<ul>';
            foreach ($subFiles as $sf) {
                if ($sf === '.' || $sf === '..') continue;
                echo '<li>' . htmlspecialchars($sf) . '</li>';
            }
            echo '</ul>';
        }
    }
    echo '</ul>';
} else {
    echo '<p style="color:red;">Build directory does NOT exist at: ' . htmlspecialchars($buildPath) . '</p>';
}

try {
    require $basePath . '/vendor/autoload.php';
    echo '<p style="color:green; font-weight:bold;">Autoload: ✅ OK</p>';
} catch (Throwable $e) {
    die('<p style="color:red; font-weight:bold;">Autoload FAILED: ' . htmlspecialchars($e->getMessage()) . '</p>');
}

try {
    $app = require_once $basePath . '/bootstrap/app.php';
    echo '<p style="color:green; font-weight:bold;">Bootstrap: ✅ OK</p>';
} catch (Throwable $e) {
    die('<p style="color:red; font-weight:bold;">Bootstrap FAILED: ' . htmlspecialchars($e->getMessage()) . '<br><pre>' . htmlspecialchars($e->getTraceAsString()) . '</pre></p>');
}

// Override storage and bootstrap paths for Vercel read-only system
try {
    $app->useStoragePath('/tmp/storage');
    $app->useBootstrapPath('/tmp/bootstrap');
    echo '<p style="color:green; font-weight:bold;">Laravel Path Overrides: ✅ OK</p>';
} catch (Throwable $e) {
    echo '<p style="color:red; font-weight:bold;">Laravel Path Overrides FAILED: ' . htmlspecialchars($e->getMessage()) . '</p>';
}

// Test Database connection
echo '<h3>Database Connectivity Test</h3>';
try {
    $db = $app->make('db');
    $pdo = $db->connection()->getPdo();
    echo '<p style="color:green; font-weight:bold;">Database Connection: ✅ SUCCESSFUL</p>';
    
    // Check if the tables exist
    $tables = $db->select('SHOW TABLES');
    echo '<p>Number of tables in database: <strong>' . count($tables) . '</strong></p>';
} catch (Throwable $e) {
    echo '<p style="color:red; font-weight:bold;">Database Connection FAILED: ' . htmlspecialchars($e->getMessage()) . '</p>';
    echo '<pre style="background: #f3f4f6; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 13px; border: 1px dashed #d1d5db;">' . htmlspecialchars($e->getTraceAsString()) . '</pre>';
}

echo '</div>';
