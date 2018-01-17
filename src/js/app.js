// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

(function () {
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    toggleNavigation();
  });

  function toggleNavigation() {
    var navigation = document.getElementById('mainNavigation');
    navigation.classList.contains('hidden') ? navigation.classList.remove('hidden') : navigation.classList.add('hidden');
  }

})();
