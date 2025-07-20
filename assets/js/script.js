  // GALLERY SECTION
  function showGallery(type) {
    document.getElementById("category-section").classList.add("hidden");
    ["inauguration", "sheleads", "online", "offline", "more", "industrial"].forEach(id => {
      document.getElementById(id + "-gallery").classList.add("hidden");
    });
    document.getElementById(type + "-gallery").classList.remove("hidden");
  }
  function goBackGallery() {
    document.getElementById("category-section").classList.remove("hidden");
    ["inauguration", "sheleads", "online", "offline", "more", "industrial"].forEach(id => {
      document.getElementById(id + "-gallery").classList.add("hidden");
    });
  }
  // RESOURCES SECTION
  function showResource(id) {
    const sections = document.querySelectorAll('.detail-section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById('resources-section').classList.add('hidden');
    const detail = document.getElementById(id);
    if (detail) {
      detail.classList.remove('hidden');
    } else {
      console.warn(`No detail section found for ID: ${id}`);
    }
  }
  function goBackToResources() {
    const sections = document.querySelectorAll('.detail-section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById('resources-section').classList.remove('hidden');
  }
  function toggleAllEvents() {
    const section = document.getElementById('all-events-cards');
    section.classList.toggle('hidden');
  }

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
});


