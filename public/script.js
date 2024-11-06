document.addEventListener('DOMContentLoaded', () => {
  const drawerDetails = document.querySelectorAll('.chest__drawer details');
  
  function handleDrawerClick(event) {
    const drawer = event.target.closest('.chest__drawer');
    const isOpen = event.target.hasAttribute('open');
    
    // Primero cerramos todos los otros cajones
    drawerDetails.forEach(detail => {
      if (detail !== event.target && detail.hasAttribute('open')) {
        detail.removeAttribute('open');
        detail.closest('.chest__drawer').setAttribute('data-opened', 'false');
      }
    });
    
    // Actualizamos el estado del cajón actual
    drawer.setAttribute('data-opened', isOpen);
  }

  // Agregamos los event listeners a todos los cajones
  drawerDetails.forEach(detail => {
    detail.addEventListener('toggle', handleDrawerClick);
  });
});