;
const CACHE_NAME = 'v1_cache_curriculum',
urlsToCache = [
    'https://augustojmnz.github.io/ProyectoCurriculumPWA/',
    'https://augustojmnz.github.io/ProyectoCurriculumPWA/index.html',
    'https://augustojmnz.github.io/ProyectoCurriculumPWA/images/Fotografía.jpg',
    'https://augustojmnz.github.io/ProyectoCurriculumPWA/script.js',
    'https://augustojmnz.github.io/ProyectoCurriculumPWA/fetch.js'
]

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(PRECACHE)
            .then(cache =>{
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(error => console.log(error))
    )
})
self.addEventListener('activate', event =>{
    const cacheWhitelist = [CPREACHE]
    event.waitUntil(
        caches.keys()
            .then(cachesNames =>{
                cachesNames.map(cacheName =>{
                    if(cacheWhitelist.indexOf(cacheName)=== -1){
                        return caches.delete(cacheName)
                    }
                })
            })
            .then(() => self.clients.claim())
    )
})
self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(res){
                return res
            }
            
            return fetch(event.request)
        })
    )
})