# bun-react-task-manager

¡Buenas, acá estamos!  
Este proyecto es un **Task Manager** minimalista hecho con React 19 y Bun, ideal para aprender cómo armar una app moderna con formularios validados, manejo de estado global y estilos con Tailwind CSS.

## 🚀 Stack real

- [Bun](https://bun.sh) – Runtime ultrarrápido para JS/TS
- [React 19](https://react.dev) – UI declarativa y componetizada
- [@tanstack/react-form](https://tanstack.com/query/latest/docs/framework/react-form) – Manejo de formularios reactivo y type-safe
- [valibot](https://valibot.dev) – Validaciones de datos simples y efectivas
- [Tailwind CSS](https://tailwindcss.com) – Estilos modernos y componentes accesibles
- **Context API** – Para manejar el estado global de las tareas

## ✨ ¿Qué hace este proyecto?

- Permite agregar y eliminar tareas (sí, lo básico, pero bien hecho)
- Formularios validados en tiempo real (no te deja poner cualquier cosa)
- Estado global de tareas usando Context API
- UI simple y responsive con Tailwind

## 🛠️ Instalación

Cloná el repo y levantá el entorno:

```bash
git clone https://github.com/alanbuscaglia/bun-react-form-gentleman.git
cd bun-react-form-gentleman
bun install
bun dev
```

## 🏗️ Comandos útiles

- `bun dev` – Levanta el server en modo desarrollo
- `bun start` – Corre la app en modo producción
- `bun test` – Ejecuta los tests (si están configurados)

## 📁 Estructura del proyecto

```
src/
  components/      # Componentes UI reutilizables
  TaskManager/     # Lógica y vistas del gestor de tareas
    context/       # Context API para el estado de tareas
    models/        # Tipos de datos (Task)
    TaskForm/      # Formulario para agregar tareas
    TaskList/      # Listado de tareas
  App.tsx          # Entry point de la app
  index.tsx        # Bootstrap de React
...
```

## 🤔 ¿Por qué Bun?

Porque es rápido, simple y la DX es una locura. Si nunca lo probaste, este proyecto es una buena excusa.

## 🤝 Contribuciones

¿Querés sumar algo? ¡Abrí un issue o mandá un PR!  
Cualquier feedback es bienvenido.

---

Hecho con amor, café y teclas ruidosas por [@Gentleman-Programming](https://github.com/Gentleman-Programming) ☕⌨️
