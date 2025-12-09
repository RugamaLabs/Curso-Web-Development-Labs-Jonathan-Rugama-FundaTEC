const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const taskList = document.getElementById('task-list');
const loadingIndicator = document.getElementById('loading');

// Cargar tareas iniciales
async function loadTasks() {
    // Mostrar loading
    loadingIndicator.classList.remove('hidden');

    try {
        // Fetch con límite de 10 
        const response = await fetch(`${API_URL}?_limit=10`);
        if (!response.ok) throw new Error('Error al cargar tareas');

        const tasks = await response.json();

        // Limpiar lista y renderizar
        taskList.innerHTML = '';
        tasks.forEach(task => renderTask(task));

    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error cargando las tareas.');
    } finally {
        // Ocultar loading
        loadingIndicator.classList.add('hidden');
    }
}

// Renderizar tarea
function renderTask(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    // Icono de estado
    const icon = task.completed ? '✅' : '⬜';

    li.innerHTML = `
        <span>${icon}</span>
        <span>${task.title}</span>
    `;

    // Agregar al DOM
    taskList.appendChild(li);
}

// Evento inicial
document.addEventListener('DOMContentLoaded', loadTasks);

// START DARK MODE SECTION

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('darkmode');

    if (body.classList.contains('darkmode')) {
        themeToggleBtn.textContent = '☀️ Día';
    } else {
        themeToggleBtn.textContent = '🌙 Noche';
    }
});

// END DARK MODE SECTION