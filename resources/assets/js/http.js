import Vue from 'vue'

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

Vue.prototype.$axios = window.axios;

// const Parent = axios.create({
//     baseURL,
//     headers,
// });
// Let’s omit this so far, see the explanation below
// class Http extends Parent {


    // static post(url, data, config) {
    //     return new Promise((resolve, reject) => {
    //         Parent.post(url, data, config)
    //             .then(response1 => resolve(response1))
    //             .catch((error1) => {
    //                 console.warn('CSRF token is expired'); // eslint-disable-line no-console
    //                 // There is one more try for token mismatch error
    //                 if (error1.response && error1.response.status === 419) {
    //                     Parent.post(url, data, config)
    //                         .then((response2) => {
    //                             const u = new window.URL(decodeURIComponent(location.href));
    //                             location.href = `${location.origin}${u.searchParams.get('back')}`;
    //                             resolve(response2);
    //                         })
    //                         .catch(error2 => reject(error2));
    //                 }
    //             });
    //     });
    // }
// }

// export default Http;