// Updated Service Data - First 7 services only
const services = [
  {
    title: "Website Design",
    description: "Custom website design, UI/UX design, and responsive design to create visually appealing and functional websites."
  },
  {
    title: "Front-end Development",
    description: "HTML, CSS, JavaScript, and popular frameworks like React, Angular, and Vue.js for dynamic and user-friendly interfaces."
  },
  {
    title: "Back-end Development",
    description: "Server-side programming, database integration, and API connectivity to ensure robust functionality and data management."
  },
  {
    title: "Content Management Systems (CMS)",
    description: "We work with WordPress, Drupal, Joomla, and custom CMS solutions to manage and update your content with ease."
  },
  {
    title: "E-commerce Solutions",
    description: "Online store development, payment gateway integration, and shopping cart solutions for a seamless buying experience."
  },
  {
    title: "Web Application Development",
    description: "Custom web applications, SaaS development, and enterprise software tailored to your business needs."
  },
  {
    title: "Mobile Application Development",
    description: "iOS, Android, and cross-platform app development for reaching users on all devices."
  }
];

// Add the first 7 services to the page dynamically
const servicesContainer = document.querySelector(".services-container");
services.forEach(service => {
  const serviceDiv = document.createElement("div");
  serviceDiv.classList.add("service");
  serviceDiv.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
  servicesContainer.appendChild(serviceDiv);
});
