<?php
// Diagnostic file - remove after debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo '<h2>PHP Diagnostic</h2>';
echo '<p>PHP Version: ' . phpversion() . '</p>';
echo '<p>Current dir: ' . __DIR__ . '</p>';
echo '<p>Vendor autoload exists: ' . (file_exists(__DIR__ . '/../vendor/autoload.php') ? 'YES ✅' : 'NO ❌') . '</p>';
echo '<p>bootstrap/app.php exists: ' . (file_exists(__DIR__ . '/../bootstrap/app.php') ? 'YES ✅' : 'NO ❌') . '</p>';
echo '<p>APP_KEY set: ' . (!empty($_ENV['APP_KEY']) ? 'YES ✅' : 'NO ❌') . '</p>';
echo '<p>DB_HOST set: ' . (!empty($_ENV['DB_HOST']) ? 'YES (' . $_ENV['DB_HOST'] . ') ✅' : 'NO ❌') . '</p>';
echo '<p>bootstrap/cache writable: ' . (is_writable(__DIR__ . '/../bootstrap/cache') ? 'YES ✅' : 'NO ❌') . '</p>';
echo '<p>/tmp writable: ' . (is_writable('/tmp') ? 'YES ✅' : 'NO ❌') . '</p>';

// Try loading vendor
try {
    require __DIR__ . '/../vendor/autoload.php';
    echo '<p>Vendor autoload loaded: YES ✅</p>';
} catch (Throwable $e) {
    echo '<p>Vendor autoload ERROR ❌: ' . $e->getMessage() . '</p>';
}

// Try bootstrapping Laravel
try {
    $app = require_once __DIR__ . '/../bootstrap/app.php';
    echo '<p>Laravel bootstrap loaded: YES ✅</p>';
} catch (Throwable $e) {
    echo '<p>Laravel bootstrap ERROR ❌: ' . $e->getMessage() . '</p>';
    echo '<pre>' . $e->getTraceAsString() . '</pre>';
}
