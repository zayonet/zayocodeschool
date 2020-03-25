window._ = require('lodash');

try {
    //window.Popper = require('../../node_modules/mdbootstrap/js/popper.min.js').default;
    //window.$ = window.jQuery = require('../../node_modules/mdbootstrap/js/jquery.min.js').default;
    
    //require('admin-lte');

    //require('../../node_modules/mdbootstrap/js/bootstrap.min.js').default;
    //require('../../node_modules/mdbootstrap/js/mdb.min.js').default;
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    require('admin-lte');
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
