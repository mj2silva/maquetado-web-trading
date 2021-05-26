(() => {
  const header = document.getElementById("header");
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      header.classList.add('header--black');
      header.classList.remove('header--transparent');
    } else {
      header.classList.remove('header--black');
      header.classList.add('header--transparent');
    }
  })
})()