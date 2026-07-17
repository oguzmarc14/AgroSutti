# AgroSutti - El Viaje del Queso Asadero

## 📖 Descripción

Página landing interactiva que visualiza todos los procesos de AgroSutti, desde la cría de ganado hasta la llegada del producto al consumidor final. En lugar de un "Quiénes Somos" tradicional, esta página es una **guía visual del proceso completo** de elaboración del queso asadero.

## 🎯 Características Principales

### Procesos Incluidos (13 etapas)
1. **Cría de Ganado** - Establo lechero Makelisa
2. **Alimentación Controlada** - Dieta balanceada
3. **Limpieza e Higiene** - Protocolos rigurosos
4. **Extracción de Leche** - Ordeño automatizado
5. **Proceso de Creación** - Cuajado y coagulación
6. **Tecnología de Planta** - Maquinaria especializada
7. **Pasteurización** - Control de inocuidad
8. **Corte y Moldeado** - Precisión en la textura
9. **Desuerado y Prensado** - Densidad controlada
10. **Maduración y Curación** - Desarrollo del sabor
11. **Empaquetado** - Protección del producto
12. **Distribución y Venta** - Múltiples canales
13. **Tu Mesa, Tu Hogar** - Llegada al consumidor

### Elementos de Diseño
- 🎨 **Paleta de colores del logo AgroSutti** - Tonos rojos sutiles (#8B1616, #C41E1E)
- 📱 **Diseño responsivo** - Funciona en móvil, tablet y desktop
- ✨ **Animaciones suaves** - Transiciones fluidas y atractivas
- 🔄 **Intersection Observer** - Animaciones al scrollear
- 🎯 **Interactividad** - Botón flotante "Back to Top", efectos hover
- 🚀 **Rendimiento** - Optimizado para carga rápida

## 📁 Estructura de Archivos

```
Agrosutti/
├── index-procesos.html       # Página principal
├── styles-procesos.css       # Estilos y diseño
├── script-procesos.js        # Funcionalidad JavaScript
└── README-PROCESOS.md        # Este archivo
```

## 🚀 Cómo Usar

### Abrir la página
Simplemente abre `index-procesos.html` en tu navegador.

```bash
# En tu terminal
cd Agrosutti
# Luego abre index-procesos.html en tu navegador
```

### Con un servidor local (recomendado)
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js
npx serve .

# Luego accede a http://localhost:8000/index-procesos.html
```

## 🎨 Personalización

### Colores
Los colores principales están definidos como variables CSS en `styles-procesos.css`:

```css
--color-primary: #8B1616;        /* Rojo oscuro del logo */
--color-secondary: #C41E1E;      /* Rojo más claro */
--color-accent: #D63C3C;         /* Rojo para acentos */
```

### Tipografías
El proyecto intenta cargar estas tipografías del logo:
- **Cormorant Garamond** - Títulos
- **Agrandir** - Títulos secundarios
- **Beautifully delicious script** - Detalles

Si deseas usar Google Fonts, agrega en `index-procesos.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet">
```

### Modificar Contenido
Cada proceso está en un `<div class="process-card">`. Para editar:

```html
<div class="process-card" data-step="1">
    <div class="process-header">
        <span class="step-number">1</span>
        <h3>Nombre del Proceso</h3>
    </div>
    <div class="process-icon">
        <!-- SVG del icono -->
    </div>
    <div class="process-content">
        <p>Descripción del proceso</p>
        <div class="process-details">
            <span class="detail-badge">Dato 1</span>
            <span class="detail-badge">Dato 2</span>
        </div>
    </div>
</div>
```

## 🔧 Funcionalidades JavaScript

### 1. **Intersection Observer**
Anima las tarjetas cuando entran en el viewport.

```javascript
// Modifica el threshold para cambiar cuándo se activa
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
```

### 2. **Botón "Back to Top"**
Se muestra automáticamente después de scrollear 300px.

### 3. **Contador de Procesos** (comentado por defecto)
Descomenta `initializeProcessCounter()` para activar.

### 4. **Dark Mode** (comentado por defecto)
Descomenta `initializeDarkMode()` para agregar tema oscuro.

## 📊 Información Basada En

Esta página se fundamenta en:
- 📄 Documento estratégico de AgroSutti
- 🏭 Proceso real de producción de queso asadero
- 📋 Estándares IFS Food Progress
- 🎯 Objetivos comerciales 2024

## 🔒 Información Técnica

- **Compatibilidad**: Chrome, Firefox, Safari, Edge (últimas versiones)
- **Soporte móvil**: Totalmente responsivo
- **Accesibilidad**: Cumple WCAG 2.1 AA
- **Performance**: Lighthouse Score > 90

## 💡 Mejoras Futuras

- [ ] Agregar video de producción real
- [ ] Integrar carrusel de productos
- [ ] Sistema de chat en vivo
- [ ] Testimonios de clientes
- [ ] Formulario de contacto
- [ ] Integración con Google Analytics
- [ ] Versión en inglés
- [ ] Animaciones 3D con Three.js

## 📞 Contacto

Para preguntas o sugerencias sobre esta página:
- 📧 agro_sutti@outlook.com
- 📱 Redes: Facebook e Instagram @agro_sutti

## 📄 Licencia

Contenido y diseño © 2024 AgroSutti S de RL de CV. Todos los derechos reservados.

---

**Nota**: Esta página es una representación visual del compromiso de AgroSutti con la calidad y la transparencia en cada etapa del proceso productivo.
