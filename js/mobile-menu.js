(() => {
  const refs = {
    openMenulBtn: document.querySelector("[data-menu-open]"),
    closeMenulBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenulBtn.addEventListener("click", toggleModal);
  refs.closeMenulBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();