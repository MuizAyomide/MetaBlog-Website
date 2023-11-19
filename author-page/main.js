
var navLinks = document.getElementById("navLinks");
        function showMenu() {
          var dis = navLinks.style.display = "flex";
        }
        function hideMenu() {
            navLinks.style.display = "none";
        }

const themeToggleBtn = document.querySelectorAll('#theme-toggle');
themeToggleBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});