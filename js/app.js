if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(req => console.log('serviceWorker registered', req))
    .catch(err => console.error('ServiceWorker not registered', err))
}