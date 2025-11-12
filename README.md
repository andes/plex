![ANDES](https://github.com/andes/andes.github.io/raw/master/images/logo.png)

# Plex: UI/UX para ANDES

Plex es un conjunto de componentes de UI/UX para el proyecto ANDES.


## Instalación
1. Crear una nueva aplicación con [angular-cli](https://cli.angular.io/)

    ```
   ng new my-app
   cd my-app
    ```
 
2. Descargar desde npm

    ```
   npm install @andes/plex --save
    ```

3. Crear un nuevo archivo `src/styles.sass` y editarlo para vincular al archivo `.sass` de Plex

    ```less
   @import '~andes-plex/src/lib/styles.sass';
    ```

4. Registrar en `angular-cli.json` los siguiente archivos:

    ```json
   ...
   "styles": [
       "styles.sass",
   ],
   "scripts": [
        "../node_modules/intro.js/intro.js"
    ],
   ...
    ```

5. Modificar `app.component.html` con el siguiente contenido:

    ```html
   <plex-app>  
   </plex-app>
    ```

6. Crear un componente `home.component.ts` con el siguiente contenido:

    ```typescript
   import { Component } from '@angular/core';

   @Component({
      template: 'Hello World',
   })
   export class HomeComponent {
   }
    ```

7. Crear el archivo `app.routing.ts` y registrar el componente:

    ```typescript
   import { Routes, RouterModule } from '@angular/router';
   import { ModuleWithProviders } from '@angular/core';
   import { HomeComponent } from './home.component';

   const appRoutes: Routes = [
     { path: '**', component: HomeComponent } 
   ];

   export const appRoutingProviders: any[] = [];
   export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
    ```

8. En `app.module.ts` importar `PlexModule` y registrar los routings y el servicio `Plex`: 

    ```typescript
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { FormsModule } from '@angular/forms';
   import { HttpModule } from '@angular/http';
   import { Plex, PlexModule } from '@andes/plex';
   import { routing, appRoutingProviders } from './app.routing';

   // Components
   import { AppComponent } from './app.component';
   import { HomeComponent } from './home.component';

   @NgModule({
     declarations: [
       AppComponent,
       HomeComponent
     ],
     imports: [
       BrowserModule,
       FormsModule,
       HttpModule,
       PlexModule,
       routing
     ],
     providers: [
       Plex,  
       appRoutingProviders  
     ],
     bootstrap: [AppComponent]
   })
   export class AppModule { }

    ```

9. Correr la aplicacion `ng serve` 

    ```
   ng serve
    ```

10. Navegar hasta `http://localhost:4200` 

## Publicación
La siguiente secuencia de pasos permite publicar la librería en NPM:

1. Incrementar la versión package.json y package-lock.json. Por ejemplo `"version": "1.1.17"`
2. Realizar commit con la nueva versión
3. Crear un tag con la versión, tiene que ser la misma que en package.json. Por ejemplo `git tag 1.1.17`
4. Realizar push de los cambios
5. Realizar el PR con la versión y luego mergear a Master
6. Volver a Master y obtener últimos cambios
7. Desde el directorio dist/ ejecutar `npm login` (usando las credenciales de Andes)
8. Ejecutar `npm publish`