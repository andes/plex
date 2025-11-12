# MIGRATION GUIDE — @andes/plex v9 (Angular 15)

**TL;DR**
- Actualizamos la librería a **Angular 15** (Ivy parcial con `ng-packagr`).
- La **demo** sale de `src/` y pasa a ser un **proyecto aparte** en `projects/plex-demo`.
- Migramos componentes a **Angular Material v15 (MDC)** y eliminamos/reemplazamos 
dependencias legacy donde aplicaba.
- Se reorganizan estilos/assets y se ajustan scripts de build y CI.


## ¿Quién debería leer esto?
- Equipos que consumen `@andes/plex` y van a actualizar a la **v9** (Angular 15).
- Quienes mantienen forks/derivados de Plex o scripts de publicación.


## Requisitos de entorno
- **Node.js**: ^14.20.0 | ^16.13.0 | ^18.10.0 (recomendado)
- **TypeScript**: >= 4.8.2 < 5.0
- **RxJS**: ^7.x
- **Angular CLI/Core**: 15.2.x
Fuente: tabla de compatibilidad oficial de Angular para la línea 15.x.
Asegurate de que tu CI (GitHub Actions) use una de esas versiones de Node.


## Cambios rompientes (BREAKING)
1. **Angular 15 + Ivy parcial**
2. **Demo separada del código fuente**
3. **Angular Material v15 (MDC)**
4. **Reemplazos de librerías deprecadas**
5. **Estilos y assets**
6. **Polyfills**


## Cómo actualizar tu aplicación que usa Plex
1. Actualizá Angular a 15
2. Alineá peerDependencies (usadas por Plex 9)
3. Reemplazos de UI
4. Estilos de Plex
5. Polyfills
6. TypeScript


## Uso de la demo (proyecto `projects/plex-demo`)
- **Desarrollo en caliente** contra el build de la lib:
npm run dev:demo
- **Servir sólo la demo usando el último build existente de la lib:**
npm run start:demo
- **Build de la demo (prod):**
npm run build:demo:prod


## Scripts relevantes en `package.json`
- `build:lib` → compila la librería con `ng-packagr`.
- `postbuild:lib` → parchea exports (estilos/assets) tras el build.
- `build` → `build:lib` + `postbuild:lib`.
- `build:lib:watch` → watch de la librería (desarrollo demo).
- `start:demo` → verifica `dist/` y corre `ng serve plex-demo`.
- `dev:demo` → build inicial de la lib + watch + serve demo.
- `build:demo` / `build:demo:prod` → compilan la demo (dev/prod).


## CI / Publicación
- Node en Actions: usar 16.18.x o 18.10+ acorde Angular 15.
- Workflows: build.yml ejecuta lint + build de la librería + tests/E2E (si aplica).
- release.yml compila docs y corre semantic-release para publicar.
- Versionado: usamos Conventional Commits y semantic-release.
- Para betas, publicar con rama beta y pre-releases (9.0.0-beta.1, etc.).
- El merge a master corta 9.0.0 estable.


## Notas de compatibilidad
- Si tu app tenía dependencias directas a Bootstrap/jQuery heredadas de Plex 8, extraélas o
reemplazalas por Angular Material.
- core-js ya no debería importarse manualmente.
- Verificá budgets de build de tu app; el bundle de la demo tiene budgets propios.


## Checklist de migración
- [ ] App actualizada a Angular 15 (core, CLI, Material, TS 4.8, RxJS 7)
- [ ] Reemplazos de bootstrapMaterial y otros deps legacy
- [ ] Import de estilos de Plex actualizado
- [ ] Polyfills limpiados
- [ ] CI actualizado a Node compatible
- [ ] Pruebas unitarias y E2E verdes
