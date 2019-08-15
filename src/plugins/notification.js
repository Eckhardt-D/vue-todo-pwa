const publicVapidKey =
  "BBUj8tWU7Hj9crwOhvg-HWwNXjuV71DZwEmEgq5RviZ5uSrxibnjtMzj7gYu4jbcMG-kV_xOsr-L3UML0hYKsZE";

async function send(todo) {
  const register = await navigator.serviceWorker.register(
    `${process.env.BASE_URL}service-worker.js`
  );
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });

  await fetch("https://chekt-notify.herokuapp.com/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      subscription,
      title: todo.title,
      ms: todo.ms,
      at: todo.at,
      uid: todo.id
    })
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default send;
