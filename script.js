// JavaScript for interactive elements

// Modal functionality (example)
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Example for dynamically setting modal content
function showDetails(serviceId) {
  let modalContent;
  switch (serviceId) {
    case 'cybersol':
      modalContent = 'Details about Cyber Solution...';
      break;
    case 'softwaredev':
      modalContent = 'Details about Software Development...';
      break;
    case 'uiuxdesign':
      modalContent = 'Details about UI/UX Design...';
      break;
    default:
      modalContent = 'No details available.';
  }
  document.getElementById('modal-content').innerText = modalContent;
  openModal('detailsModal');
}

// Adding event listeners to service detail buttons (example)
document.querySelectorAll('.service-details-btn').forEach(button => {
  button.addEventListener('click', event => {
    const serviceId = event.target.dataset.serviceId;
    showDetails(serviceId);
  });
});
