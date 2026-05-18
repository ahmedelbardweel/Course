import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Pusher = Pusher;
Pusher.logToConsole = true;



window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: 8011,
    wssPort: 8011,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    auth: {
        headers: {
            'X-CSRF-TOKEN': (function() {
                const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
                console.log('Broadcasting CSRF Token:', token);
                return token;
            })()
        }
    }
});

window.Echo.connector.pusher.connection.bind('error', function(err) {
    console.error('WebSocket Detailed Error:', err);
    alert('Detailed Error: ' + JSON.stringify(err));
});
