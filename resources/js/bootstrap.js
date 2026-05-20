import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Pusher = Pusher;
Pusher.logToConsole = true;



// Detect broadcaster dynamically based on VITE_PUSHER_APP_KEY
const broadcaster = import.meta.env.VITE_PUSHER_APP_KEY ? 'pusher' : 'reverb';

const echoConfig = {
    broadcaster: broadcaster,
    key: import.meta.env.VITE_PUSHER_APP_KEY || import.meta.env.VITE_REVERB_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: import.meta.env.VITE_PUSHER_APP_KEY ? true : false,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios.post('/broadcasting/auth', {
                    socket_id: socketId,
                    channel_name: channel.name
                }, {
                    headers: {
                        // Dynamically retrieve the CSRF token from the meta tag at the moment of request
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                    }
                })
                .then(response => {
                    callback(false, response.data);
                })
                .catch(error => {
                    console.error('Broadcasting auth error:', error);
                    callback(true, error);
                });
            }
        };
    }
};

// Apply Reverb-specific configurations if running Reverb locally
if (broadcaster === 'reverb') {
    echoConfig.wsHost = import.meta.env.VITE_REVERB_HOST || '127.0.0.1';
    echoConfig.wsPort = import.meta.env.VITE_REVERB_PORT ?? 8011;
    echoConfig.wssPort = import.meta.env.VITE_REVERB_PORT ?? 8011;
    echoConfig.enabledTransports = ['ws', 'wss'];
}

window.Echo = new Echo(echoConfig);

window.Echo.connector.pusher.connection.bind('error', function(err) {
    console.error('WebSocket Detailed Error:', err);
});
