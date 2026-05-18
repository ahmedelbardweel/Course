<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

$basePath = dirname(__DIR__);

echo '<h2>PHP Diagnostic</h2>';
echo '<p>PHP: ' . phpversion() . '</p>';
echo '<p>Vendor: ' . (file_exists($basePath . '/vendor/autoload.php') ? '✅ YES' : '❌ NO') . '</p>';
echo '<p>APP_KEY env: ' . (getenv('APP_KEY') ? '✅ SET' : '❌ NOT SET') . '</p>';
echo '<p>DB_HOST env: ' . (getenv('DB_HOST') ? '✅ ' . getenv('DB_HOST') : '❌ NOT SET') . '</p>';
echo '<p>/tmp writable: ' . (is_writable('/tmp') ? '✅ YES' : '❌ NO') . '</p>';
echo '<p>bootstrap/cache: ' . (is_dir($basePath . '/bootstrap/cache') ? '✅ EXISTS' : '❌ MISSING') . '</p>';
echo '<p>bootstrap/cache writable: ' . (is_writable($basePath . '/bootstrap/cache') ? '✅ YES' : '❌ READ-ONLY') . '</p>';

try {
    require $basePath . '/vendor/autoload.php';
    echo '<p>Autoload: ✅ OK</p>';
} catch (Throwable $e) {
    die('<p>Autoload FAILED: ' . $e->getMessage() . '</p>');
}

try {
    $app = require_once $basePath . '/bootstrap/app.php';
    echo '<p>Bootstrap: ✅ OK</p>';
} catch (Throwable $e) {
    die('<p>Bootstrap FAILED: ' . $e->getMessage() . '<br><pre>' . $e->getTraceAsString() . '</pre></p>');
}
