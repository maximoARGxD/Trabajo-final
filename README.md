# Trabajo Final - Panel de Administración y Tienda

## Índice

- [Objetivo general](#objetivo-general)
- [Funcionalidades implementadas](#funcionalidades-implementadas)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instrucciones para ejecutar localmente](#instrucciones-para-ejecutar-localmente)
- [Sobre el proyecto](#sobre-el-proyecto)
- [API utilizada](#api-utilizada)
- [Licencia](#licencia)

## Objetivo general

Desarrollar una plataforma web en **React** que simula una tienda online con un **panel de administración** para gestionar productos (agregar, editar, eliminar) de forma sencilla y accesible. La plataforma permite mostrar productos obtenidos de una API externa y también agregar productos manualmente en memoria local, ofreciendo una experiencia fluida y amigable para usuarios y emprendedores.

## Funcionalidades implementadas

- Listado de productos obtenidos desde la **Fake Store API**.
- Búsqueda en tiempo real para filtrar productos.
- Agregar productos manualmente, guardados en la memoria local de la aplicación.
- Vista previa del producto antes de confirmar su guardado.
- Edición y eliminación de productos existentes.
- Imagen por defecto (*placeholder*) cuando no se proporciona una URL válida.
- Redirección automática a la página principal tras agregar un producto.
- Footer fijo al final de la página para una mejor experiencia visual.
- Navegación fluida con **React Router DOM**.
- Notificaciones interactivas usando **SweetAlert2** para feedback al usuario.
- Diseño moderno y adaptable con **Bootstrap 5**.
- Uso de componentes reutilizables y manejo eficiente del estado con Hooks de React.

## Tecnologías utilizadas

- **React** (creado con Vite)
- **Bootstrap 5** para estilos y diseño responsivo
- **React Router DOM** para navegación SPA
- **SweetAlert2** para notificaciones
- **React Icons** para iconografía
- **Fake Store API** como fuente de datos inicial

## Instrucciones para ejecutar localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/maximoARGxD/Trabajo-final.git
   cd Trabajo-final
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```
4. Abrir el proyecto en el navegador en la URL que indique Vite, típicamente:

   ```
   http://localhost:5173/
   ```


## Sobre el proyecto

Este proyecto está diseñado para ofrecer una plataforma intuitiva donde tanto pequeños emprendedores como usuarios finales puedan interactuar con un catálogo de productos sin complicaciones técnicas. Se aprovechan tecnologías modernas de React para un desarrollo eficiente, con componentes reutilizables, y se implementa un panel de administración funcional para manejar los productos de la tienda.


## API utilizada

* [**Fake Store API:**](https://fakestoreapi.com/products)
  Se utiliza para obtener un listado inicial de productos y simular operaciones CRUD.


## Licencia

Este proyecto es de uso libre para fines educativos.
