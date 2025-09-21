# E-commerce React - Proyecto Final

## Descripción del Proyecto

Este es un proyecto de e-commerce desarrollado con React que implementa un catálogo de productos con funcionalidades de carrito de compras, navegación entre secciones y integración con Firebase Firestore.

## Características Implementadas

### 🛍️ Listado y Detalle de Productos
- **ItemListContainer**: Contenedor que obtiene y maneja los productos desde Firebase
- **ItemDetailContainer**: Contenedor para la vista detallada de cada producto
- **ItemList**: Componente de presentación que muestra la grilla de productos
- **ItemDetail**: Componente de presentación para mostrar detalles del producto
- **ItemCount**: Componente con validaciones para seleccionar cantidad (mínimo, máximo por stock)

### 🧭 Navegación
- **React Router**: Navegación SPA entre todas las secciones
- **NavBar**: Barra de navegación con enlaces a Inicio, Catálogo y Carrito
- **CartWidget**: Widget que muestra el contador de items en el carrito

### 🛒 Criterios de Compras
- **CartContext**: Context API para manejo del estado del carrito
- **Cart**: Componente que muestra el contenido del carrito con cantidades y totales
- **Persistencia**: El carrito se guarda en localStorage

### 🔥 Firebase
- **Firestore**: Base de datos para productos y órdenes
- **Colección 'item'**: Almacena la información de productos
- **Colección 'orders'**: Registra las compras realizadas

### 👤 Experiencia de Usuario
- **Renderizado condicional**: Loaders, mensajes de error y estados vacíos
- **Validaciones**: Stock disponible, cantidades mínimas/máximas
- **Feedback visual**: Confirmaciones de acciones y estados de carga

## Estructura del Proyecto

```
src/
├── context/
│   └── CartContext.jsx          # Context del carrito
├── firebase.js                  # Configuración de Firebase
├── App.jsx                      # Componente principal con routing
└── main.jsx                     # Punto de entrada

components/
├── NavBar.jsx                   # Barra de navegación
└── CartWidget.jsx               # Widget del carrito

containers/
├── ItemListContainer.jsx        # Contenedor del listado
└── ItemDetailContainer.jsx      # Contenedor del detalle

presentation/
├── ItemList.jsx                 # Lista de productos
├── ItemDetail.jsx               # Detalle del producto
├── ItemCount.jsx                # Selector de cantidad
├── Cart.jsx                     # Carrito de compras
└── Checkout.jsx                 # Proceso de compra

services/
└── item.js                      # Servicios de Firebase
```

## Tecnologías Utilizadas

- **React 18**: Framework principal
- **React Router**: Navegación SPA
- **Firebase Firestore**: Base de datos
- **Context API**: Manejo de estado global
- **CSS-in-JS**: Estilos inline para componentes

## Funcionalidades Principales

### 1. Catálogo de Productos
- Listado dinámico desde Firebase
- Vista de detalle con información completa
- Imágenes, precios, stock y descripciones

### 2. Carrito de Compras
- Agregar/remover productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia en localStorage

### 3. Proceso de Compra
- Formulario de datos del cliente
- Validación de campos requeridos
- Generación de orden en Firestore
- Confirmación con ID de orden

### 4. Navegación
- Rutas: `/`, `/catalogo`, `/item/:id`, `/carrito`, `/checkout`
- Navegación sin recarga de página
- Breadcrumbs y enlaces de navegación

## Configuración de Firebase

El proyecto está configurado para usar Firebase Firestore con las siguientes colecciones:

### Colección 'item'
```javascript
{
  id: "auto-generado",
  nombre: "string",
  categoria: "string", 
  precio: "number",
  stock: "number",
  imagen: "string",
  descripcion: "string"
}
```

### Colección 'orders'
```javascript
{
  id: "auto-generado",
  cliente: {
    nombre: "string",
    email: "string",
    telefono: "string",
    direccion: "string",
    ciudad: "string",
    codigoPostal: "string"
  },
  items: "array",
  total: "number",
  fecha: "timestamp",
  estado: "string"
}
```

## Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Configurar Firebase**:
   - Crear proyecto en Firebase Console
   - Habilitar Firestore Database
   - Actualizar configuración en `src/firebase.js`

3. **Ejecutar proyecto**:
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación**:
   - Abrir http://localhost:5173 en el navegador

## Convenciones de Código

- **Componentes**: PascalCase (ej: `ItemList`)
- **Funciones**: camelCase (ej: `addToCart`)
- **Variables**: camelCase (ej: `cartItems`)
- **Archivos**: PascalCase para componentes, camelCase para utilidades
- **Props**: camelCase (ej: `onAddToCart`)

## Mejoras Futuras

- [ ] Filtros por categoría
- [ ] Búsqueda de productos
- [ ] Autenticación de usuarios
- [ ] Historial de compras
- [ ] Sistema de reviews
- [ ] Pago con tarjeta
- [ ] Notificaciones push

## Autor

Proyecto desarrollado como parte del curso de React - Coderhouse

