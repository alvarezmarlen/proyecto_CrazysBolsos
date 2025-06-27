/* lupa de buscar */
  const abrirBusqueda = document.getElementById('abrirBusqueda');
  const cerrarBusqueda = document.getElementById('cerrarBusqueda');
  const barraBusqueda = document.getElementById('busqueda');

  abrirBusqueda.addEventListener('click', () => {
    barraBusqueda.style.display = 'flex';
  });

  cerrarBusqueda.addEventListener('click', () => {
    barraBusqueda.style.display = 'none';
  });