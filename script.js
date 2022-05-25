if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://augustojmnz.github.io/ProyectoCurriculumPWA/serviceworker.js')
    .then(reg => console.log('Registro hecho', reg))
    .catch(error => console.warn(error))
}