<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- PWA Settings -->
    <meta name="theme-color" content="#f54e00">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="كورس">
    <link rel="apple-touch-icon" href="/logo.svg">
    <link rel="manifest" href="/manifest.json">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead

    <!-- Service Worker Registration -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('Service Worker Registered successfully:', reg.scope))
                    .catch(err => console.error('Service Worker registration failed:', err));
            });
        }
    </script>

    <style>
        /* Strict global font size enforcement for a dense UI */
        html {
            font-size: 12px !important;
            -webkit-text-size-adjust: none;
            touch-action: pan-x pan-y;
        }

        body {
            font-size: 1rem;
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            touch-action: pan-x pan-y;
        }

        /* Prevent iOS Zoom on Inputs */
        input,
        select,
        textarea {
            font-size: 16px !important;
        }

        /* Mobile specific fixes */
        @media (max-width: 768px) {
            html {
                font-size: 11px !important;
            }
        }

        /* Custom Scrollbar Hide */
        * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }

        *::-webkit-scrollbar {
            display: none !important;
        }

        /* Shadcn Consistency */
        .shadcn-btn {
            font-size: 0.85rem !important;
            font-weight: 600 !important;
        }
    </style>
    <script>
        window.onerror = function (message, source, lineno, colno, error) {
            const errorData = {
                message: message,
                source: source,
                line: lineno,
                column: colno,
                stack: error ? error.stack : ''
            };
            // Try to log to console and also alert for immediate user feedback
            console.error('Bypassed Error:', errorData);
            alert('JS Error Detected: ' + message + '\nAt: ' + source + ':' + lineno);
        };

        // Catch unhandled promise rejections
        window.onunhandledrejection = function (event) {
            alert('Unhandled Rejection: ' + event.reason);
        };
    </script>
    <script>
        // Force disable pinch-to-zoom at the event level (Standard way is often ignored by iOS)
        document.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, { passive: false });

        document.addEventListener('gesturestart', function (event) {
            event.preventDefault();
        });

        document.addEventListener('wheel', function (event) {
            if (event.ctrlKey) {
                event.preventDefault();
            }
        }, { passive: false });
    </script>
</head>

<body
    class="font-sans antialiased selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-50 dark:selection:text-zinc-900 overflow-x-hidden">
    @inertia
</body>

</html>