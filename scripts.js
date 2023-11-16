// Simula un retraso de carga para demostración
function simulatePageLoad() {
  var loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.classList.add('show');

  setTimeout(function () {
    loadingOverlay.classList.remove('show');
  }, 200); // Tiempo de carga simulado (en milisegundos)
}

// Simula la carga de la página al cargar el documento
document.addEventListener('DOMContentLoaded', function () {
  simulatePageLoad();
});

// Manejo del tema oscuro
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeStylesheet = document.getElementById('themeStylesheet');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDarkTheme = document.body.classList.contains('dark-theme');
  const newTheme = isDarkTheme ? 'dark' : 'light';

  // Actualiza la hoja de estilo según el tema seleccionado
  themeStylesheet.setAttribute('href', `styles-${newTheme}.css`);

  // Actualiza el contenido del botón según el tema seleccionado
  updateThemeButtonContent(isDarkTheme);
});

function updateThemeButtonContent(isDarkTheme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = isDarkTheme ? '🌜' : '🌞';
  themeToggleBtn.textContent = themeIcon;
}

// Inicializa el contenido del botón al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const isDarkTheme = document.body.classList.contains('dark-theme');
  updateThemeButtonContent(isDarkTheme);
});