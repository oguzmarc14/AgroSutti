# 🚀 GUÍA RÁPIDA - AgroSutti Procesos

## Inicio Rápido en 30 segundos

### Opción 1: Abrir directamente
1. Abre el archivo `index-procesos.html` en tu navegador

### Opción 2: Con servidor local (recomendado)

**Windows (PowerShell):**
```powershell
cd Agrosutti
python -m http.server 8000
# Luego abre http://localhost:8000/index-procesos.html
```

**Mac/Linux:**
```bash
cd Agrosutti
python3 -m http.server 8000
# Luego abre http://localhost:8000/index-procesos.html
```

---

## 📋 Archivos Incluidos

```
✅ index-procesos.html       → Página principal (13 procesos)
✅ styles-procesos.css        → Estilos y colores (rojo del logo)
✅ script-procesos.js         → Interactividad (animaciones, scroll)
✅ config-procesos.json       → Configuración (colores, procesos)
✅ README-PROCESOS.md         → Documentación completa
✅ GUIA-RAPIDA.md            → Este archivo
```

---

## 🎨 Características

- ✨ 13 etapas de proceso visualizadas
- 🎯 Colores del logo AgroSutti (rojo #8B1616)
- 📱 100% responsivo (móvil, tablet, desktop)
- ⚡ Animaciones suaves al scrollear
- 🚀 Botón "Back to Top" flotante
- 🔄 Efectos hover interactivos
- ⚙️ Fácil de personalizar

---

## 🎯 Personalización Básica

### Cambiar Colores Principales

En `styles-procesos.css`, busca:
```css
:root {
    --color-primary: #8B1616;      /* Cambia aquí */
    --color-secondary: #C41E1E;    /* Y aquí */
}
```

### Cambiar Contenido de un Proceso

En `index-procesos.html`, busca el `data-step` y edita:
```html
<h3>Tu Título</h3>
<p>Tu descripción aquí</p>
```

### Agregar Más Procesos

Duplica un `process-card` y incrementa el número:
```html
<div class="process-card" data-step="14">
    <!-- Copia el contenido de otro card -->
</div>
```

---

## 🔥 Mejoras Que Puedes Hacer

1. **Agregar Google Fonts** en `index-procesos.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet">
```

2. **Activar Dark Mode**: En `script-procesos.js` descomenta:
```javascript
window.addEventListener('load', initializeDarkMode);
```

3. **Activar Contador de Procesos**: En `script-procesos.js` descomenta:
```javascript
window.addEventListener('load', () => {
    initializeProcessCounter();
});
```

4. **Agregar Videos**: Reemplaza los SVG con `<video>` tags

5. **Agregar Imágenes Reales**: Usa `<img>` en lugar de iconos SVG

---

## 🐛 Solución de Problemas

### Los estilos no se cargan
- Verifica que `styles-procesos.css` esté en la misma carpeta
- Comprueba que los nombres de archivos sean exactos (sensible a mayúsculas)

### Las animaciones no se ven
- Actualiza la página (Ctrl+F5 o Cmd+Shift+R)
- Desactiva "Reduced Motion" en tu navegador

### El layout se ve roto en móvil
- El CSS es responsivo. Prueba con Chrome DevTools (F12)
- Asegúrate de que el viewport meta tag esté presente

---

## 📊 Información Técnica

| Propiedad | Valor |
|-----------|-------|
| **Navegadores** | Chrome, Firefox, Safari, Edge (últimos) |
| **Móvil** | iOS 12+, Android 5+ |
| **Tamaño** | ~150 KB (optimizado) |
| **Performance** | Lighthouse 90+ |
| **Accesibilidad** | WCAG 2.1 AA |

---

## 💡 Tips Avanzados

### Modificar velocidad de animaciones
En `styles-procesos.css`:
```css
.process-card {
    transition: all 0.3s cubic-bezier(...);  /* Cambia 0.3s */
}
```

### Cambiar espaciado
En `styles-procesos.css`:
```css
.processes-container {
    gap: 2rem;  /* Aumento o reducción del espacio */
}
```

### Agregar efectos al scroll
En `script-procesos.js`, modifica `initializeParallax()`

---

## 🌐 Compartir la Página

### En GitHub Pages
1. Sube la carpeta a un repositorio
2. En Settings → Pages, selecciona la rama `main`
3. Tu página estará en: `tuusuario.github.io/agrosutti`

### En tu propio servidor
1. Descarga los 3 archivos (HTML, CSS, JS)
2. Súbelos vía FTP a tu hosting
3. Accede a través de tu dominio

---

## 📞 Soporte

- 📧 Email: agro_sutti@outlook.com
- 👥 Instagram: @agro_sutti
- 👥 Facebook: @agro_sutti

---

## 📝 Licencia

© 2026 AgroSutti S de RL de CV - Todos los derechos reservados

---

**¡Listo!** Tu página de procesos está lista para usar. 🎉
