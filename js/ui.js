document.addEventListener("DOMContentLoaded", function() {
  const menus = document.querySelectorAll(".sidenav");
  M.Sidenav.init(menus, { edge: "right" });
});

if("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("serviceworker.js")
    .then(req => console.log("Service worker registered.", req))
    .catch(err => console.log("Service Worker registration failed", err));
};