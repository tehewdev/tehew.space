// Nome do cache e versão
const CACHE_NAME = 'financeiro-pwa-v1';
const DYNAMIC_CACHE = 'financeiro-dynamic-v1';

// Arquivos para cache na instalação (subdiretório /economy/)
const urlsToCache = [
  '/economy/',
  '/economy/index.html',
  '/economy/manifest.json',
  '/economy/icons/icon-72x72.png',
  '/economy/icons/icon-96x96.png',
  '/economy/icons/icon-128x128.png',
  '/economy/icons/icon-144x144.png',
  '/economy/icons/icon-152x152.png',
  '/economy/icons/icon-192x192.png',
  '/economy/icons/icon-384x384.png',
  '/economy/icons/icon-512x512.png'
];

// Evento de instalação - cacheia arquivos estáticos
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Cacheando arquivos');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Evento de ativação - limpa caches antigos
self.addEventListener('activate', event => {
  console.log('[Service Worker] Ativando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            console.log('[Service Worker] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia: Network First com fallback para Cache
self.addEventListener('fetch', event => {
  // Apenas interceptar requests do escopo /economy/
  if (!event.request.url.includes('/economy/')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se a resposta for válida, clona e cacheia
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Se falhar, tenta buscar do cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Se não houver cache e for navegação, retorna a página principal
            if (event.request.mode === 'navigate') {
              return caches.match('/economy/index.html');
            }
          });
      })
  );
});

// Mensagens do cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sync em segundo plano (para futuras implementações)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-transactions') {
    console.log('[Service Worker] Sincronizando transações...');
    // Aqui você pode adicionar lógica para sincronizar dados quando voltar online
  }
});

// Notificações push (para futuras implementações)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Nova notificação',
    icon: '/economy/icons/icon-192x192.png',
    badge: '/economy/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Controle Financeiro', options)
  );
});

// Clique na notificação
self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notificação clicada');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/economy/')
  );
});

