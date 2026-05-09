# Sistema de Gestión TecnoRepuestos S.A.

Aplicación web para la gestión de inventarios, compras, ventas y portal del cliente.

## Tecnologías

- Backend: Node.js + Express + Sequelize (PostgreSQL)
- Frontend: React (Vite)
- Autenticación: JWT

## Estructura del proyecto

- `/server`: API REST y lógica de negocio.
- `/client`: Aplicación SPA del frontend.

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm run install:all` para instalar dependencias de ambos proyectos.
3. Configurar variables de entorno (copiar `.env.example` a `.env` en `server/`).
4. Ejecutar migraciones de base de datos.
5. Levantar desarrollo: `npm run dev`.

## Licencia

Propietario – Uso académico.