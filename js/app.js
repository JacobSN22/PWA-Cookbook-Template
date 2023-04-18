if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(req => console.log('ServiceWorker registered', req))
    .catch(err => console.error('ServiceWorker not registered', err))
}