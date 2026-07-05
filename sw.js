// Minimální service worker – jen aby byla PWA instalovatelná.
// Appka samotná běží na script.google.com (vlastní cache má v sobě).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
