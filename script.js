if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceworker.js')
    .then(reg => console.log('Buenos días', reg))
    .catch(error => console.warn(error))
}