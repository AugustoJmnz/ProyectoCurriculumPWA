;
const CACHE_NAME = 'v1_cache_curriculum',
urlsToCache = [
    'https://AugustoJmnz.github.io/ProyectoCurriculumPWA/',
    'https://AugustoJmnz.github.io/ProyectoCurriculumPWA/index.html',
    'https://AugustoJmnz.github.io/ProyectoCurriculumPWA/images/Fotografía.jpg',
    'https://AugustoJmnz.github.io/ProyectoCurriculumPWA/script.js',
    'https://AugustoJmnz.github.io/ProyectoCurriculumPWA/fetch.js',
]

self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>{
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(error => console.log(error))
    )
})
self.addEventListener('activate', e =>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
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
self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                return res
            }
            
            return fetch(e.request)
        })
    )
})