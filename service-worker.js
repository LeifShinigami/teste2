self.addEventListener("install", (e) => {
  console.log("📦 Service Worker instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("⚡️ Service Worker ativo.");
});

self.addEventListener("fetch", (e) => {
  // Podes adicionar lógica de cache aqui se quiseres
});
