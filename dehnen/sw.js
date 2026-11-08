/* Alte Adresse: räumt den alten Offline-Speicher auf und leitet zur neuen App weiter. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    await caches.delete('dehnen-v1');
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => c.navigate('../dehnen-beine-huefte/'));
  })());
});
