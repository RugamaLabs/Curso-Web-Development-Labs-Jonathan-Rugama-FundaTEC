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

//START POST SECTION
const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const completedInput = document.getElementById('task-completed');

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar recarga

    const title = titleInput.value.trim();
    const isCompleted = completedInput.checked;

    // Validación local
    if (title.length < 3) {
        alert('El título debe tener al menos 3 caracteres.');
        return;
    }

    // Preparar datos
    const newTask = {
        title: title,
        completed: isCompleted,
        userId: 1 // Requerido por la API
    };

    try {
        // POST request
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) throw new Error('Error al crear tarea');

        const data = await response.json();

        // Como la API es fake, usamos los datos devueltos para renderizar
        renderTask(data);

        // Mover el nuevo elemento al principio de la lista visualmente
        const newElement = taskList.lastElementChild;
        taskList.prepend(newElement);

        // Reset form
        taskForm.reset();
        alert('Tarea agregada exitosamente (simulado)');

    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo crear la tarea.');
    }
});

/* END POST SECTION 

--------------------------------------

START DARK MODE SECTION */

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