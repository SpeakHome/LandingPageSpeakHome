function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function toggleMenu() {
  const navList = document.querySelector('.top-bar nav ul');
  navList.classList.toggle('show');
}