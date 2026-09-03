// WL_C# — script minimal (menu mobile + fermeture au clic sur un lien)
document.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("bouton-menu-mobile");
  const nav = document.getElementById("nav-principale");
  if (!bouton || !nav) return;

  bouton.addEventListener("click", function () {
    nav.classList.toggle("ouvert");
  });

  nav.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
      nav.classList.remove("ouvert");
    });
  });
});
