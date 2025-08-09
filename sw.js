/**
 * Service Worker for TechNext Career Hub
 * Provides offline functionality and performance improvements
 */

const CACHE_NAME = 'tech-career-hub-v1.0.0';
const STATIC_CACHE = 'tech-career-hub-static-v1';
const DYNAMIC_CACHE = 'tech-career-hub-dynamic-v1';

// Assets to cache on install
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/data.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .catch((error) => {
                console.error('[SW] Failed to cache static assets:', error);
            })
    );
    
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
    
    // Take control of all pages
    event.waitUntil(self.clients.claim());
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin) && 
        !event.request.url.includes('googleapis.com') &&
        !event.request.url.includes('cdnjs.cloudflare.com')) {
        return;
    }
    
    event.respondWith(
        cacheFirst(event.request)
    );
});

/**
 * Cache first strategy - try cache first, then network
 */
async function cacheFirst(request) {
    try {
        // Try to get the resource from cache first
        const cachedResponse = await caches.match(request);
        
        if (cachedResponse) {
            console.log('[SW] Serving from cache:', request.url);
            
            // If it's a static asset, also try to update it in background
            if (isStaticAsset(request.url)) {
                updateCacheInBackground(request);
            }
            
            return cachedResponse;
        }
        
        // If not in cache, fetch from network
        console.log('[SW] Fetching from network:', request.url);
        const networkResponse = await fetch(request);
        
        // Cache the response if it's successful
        if (networkResponse.status === 200) {
            await cacheResponse(request, networkResponse.clone());
        }
        
        return networkResponse;
        
    } catch (error) {
        console.error('[SW] Fetch failed:', error);
        
        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
            return caches.match('/index.html');
        }
        
        // Return a basic response for other requests
        return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
                'Content-Type': 'text/plain'
            })
        });
    }
}

/**
 * Check if URL is a static asset
 */
function isStaticAsset(url) {
    return STATIC_ASSETS.some(asset => url.includes(asset.replace('/', ''))) ||
           url.includes('.css') ||
           url.includes('.js') ||
           url.includes('.woff') ||
           url.includes('.woff2');
}

/**
 * Cache a response
 */
async function cacheResponse(request, response) {
    const cacheName = isStaticAsset(request.url) ? STATIC_CACHE : DYNAMIC_CACHE;
    
    try {
        const cache = await caches.open(cacheName);
        await cache.put(request, response);
        console.log('[SW] Cached response:', request.url);
    } catch (error) {
        console.error('[SW] Failed to cache response:', error);
    }
}

/**
 * Update cache in background
 */
async function updateCacheInBackground(request) {
    try {
        const response = await fetch(request);
        if (response.status === 200) {
            await cacheResponse(request, response);
        }
    } catch (error) {
        console.log('[SW] Background update failed:', error);
    }
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
    console.log('[SW] Received message:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        clearAllCaches().then(() => {
            event.ports[0].postMessage({ success: true });
        });
    }
});

/**
 * Clear all caches
 */
async function clearAllCaches() {
    try {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
        );
        console.log('[SW] All caches cleared');
    } catch (error) {
        console.error('[SW] Failed to clear caches:', error);
    }
}

// Background sync for form submissions (if implemented)
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);
    
    if (event.tag === 'career-inquiry') {
        event.waitUntil(syncCareerInquiries());
    }
});

/**
 * Sync career inquiries when online
 */
async function syncCareerInquiries() {
    try {
        // Implementation for syncing offline form submissions
        console.log('[SW] Syncing career inquiries...');
        // This would typically involve reading from IndexedDB and submitting to server
    } catch (error) {
        console.error('[SW] Failed to sync career inquiries:', error);
    }
}

// Handle push notifications (if implemented)
self.addEventListener('push', (event) => {
    console.log('[SW] Push received:', event);
    
    const options = {
        body: event.data ? event.data.text() : 'New career opportunities available!',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        vibrate: [200, 100, 200],
        tag: 'career-notification',
        actions: [
            {
                action: 'explore',
                title: 'Explore Careers',
                icon: '/icons/explore-icon.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/icons/close-icon.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('TechNext Career Hub', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked:', event);
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/#careers')
        );
    } else if (event.action === 'close') {
        // Notification is already closed
        return;
    } else {
        // Default action - open the app
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Error handling
self.addEventListener('error', (event) => {
    console.error('[SW] Error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
    console.error('[SW] Unhandled promise rejection:', event.reason);
});
