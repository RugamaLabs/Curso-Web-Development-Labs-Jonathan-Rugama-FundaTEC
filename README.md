# Luces Navideñas Animadas

---

## Descripción
Este proyecto consiste en una simulación interactiva de luces navideñas desarrollada con tecnologías web estándar. La aplicación genera dinámicamente una secuencia de 10 luces que alternan entre diferentes patrones de colores (rojo, verde, azul y amarillo) creando un efecto festivo animado. El usuario tiene el control total para iniciar y detener la secuencia mediante un botón de encendido/apagado.

La lógica del proyecto se basa en ciclos de animación controlados por JavaScript, donde se recorren arreglos de patrones predefinidos para aplicar estilos CSS que simulan el brillo y color de las luces.

---

## Tecnologías Utilizadas
- **HTML5**: Se utiliza para la estructura base de la página. El contenedor de las luces (`.light-container`) y los elementos de la interfaz se generan y manipulan dinámicamente, manteniendo un marcado inicial limpio.
- **CSS3**:
  - **Flexbox**: Para la alineación centrada y responsiva de las luces y el botón.
  - **Estilos Visuales**: Uso de `border-radius` para crear las luces circulares y `box-shadow` para el efecto de resplandor (glow) en los colores `.red`, `.green`, `.blue` y `.yellow`.
  - **Transiciones**: `transition: ease-in-out 0.2s` para suavizar el cambio de colores.
- **JavaScript (ES6+)**:
  - **Manipulación del DOM**: Creación dinámica de elementos `div` para las luces y el botón `button`.
  - **Manejo de Eventos**: `addEventListener` para controlar el inicio y fin de la animación al hacer clic.
  - **Lógica de Animación**: Uso de `setTimeout` recursivo para ciclar a través de 5 patrones de iluminación diferentes cada 1.5 segundos.
  - **Estructuras de Datos**: Uso de Arrays para definir las secuencias de colores.

---

## Instrucciones de Uso
1. **Abrir el Proyecto**: Ejecute el archivo `index.html` en su navegador web de preferencia.
2. **Interfaz Inicial**: Al cargar, verá una fila de luces apagadas (círculos blancos) y un botón etiquetado como "Turn on".
3. **Encender Luces**: Haga clic en el botón **"Turn on"**.
   - El texto del botón cambiará a "Turn off".
   - Las luces comenzarán a cambiar de color siguiendo una secuencia de 5 patrones que se repiten indefinidamente.
4. **Apagar Luces**: Haga clic en el botón **"Turn off"** para detener la animación.
   - La secuencia se detendrá y podrá reiniciarla nuevamente cuando lo desee.

---
---

# Animated Christmas Lights

---

## Description
This project consists of an interactive simulation of Christmas lights developed with standard web technologies. The application dynamically generates a sequence of 10 lights that alternate between different color patterns (red, green, blue, and yellow), creating an animated festive effect. The user has full control to start and stop the sequence using an on/off button.

The project logic is based on animation cycles controlled by JavaScript, iterating through arrays of predefined patterns to apply CSS styles that simulate the glow and color of the lights.

---

## Technologies Used
- **HTML5**: Used for the base page structure. The lights container (`.light-container`) and interface elements are generated and manipulated dynamically, keeping the initial markup clean.
- **CSS3**:
  - **Flexbox**: For centered and responsive alignment of lights and the button.
  - **Visual Styles**: Use of `border-radius` to create circular lights and `box-shadow` for the glow effect on `.red`, `.green`, `.blue`, and `.yellow` colors.
  - **Transitions**: `transition: ease-in-out 0.2s` to smooth out color changes.
- **JavaScript (ES6+)**:
  - **DOM Manipulation**: Dynamic creation of `div` elements for lights and the `button`.
  - **Event Handling**: `addEventListener` to control the start and end of the animation upon clicking.
  - **Animation Logic**: Use of recursive `setTimeout` to cycle through 5 different lighting patterns every 1.5 seconds.
  - **Data Structures**: Use of Arrays to define color sequences.

---

## Usage Instructions
1. **Open the Project**: Run the `index.html` file in your preferred web browser.
2. **Initial Interface**: Upon loading, you will see a row of off lights (white circles) and a button labeled "Turn on".
3. **Turn On Lights**: Click the **"Turn on"** button.
   - The button text will change to "Turn off".
   - The lights will start changing colors following a sequence of 5 patterns that repeat indefinitely.
4. **Turn Off Lights**: Click the **"Turn off"** button to stop the animation.
   - The sequence will stop, and you can restart it whenever you wish.
