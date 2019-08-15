self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("push", e => {
  const data = e.data.json();
  self.registration.showNotification(`Remember: ${data.title}`, {
    body: "from Chekt",
    icon: "/img/icons/apple-icon-120x120.png"
  });
});
