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
 
3. Renombrar el archivo `src/styles.css` a  `src/styles.less` y editarlo para vincular al archivo `.less` de Plex

    ```less
   @import '~andes-plex/src/lib/styles.less';
    ```
 
4. Crear un nuevo archivo `src/styles.sass` y editarlo para vincular al archivo `.sass` de Plex

    ```less
   @import '~andes-plex/src/lib/styles.sass';
    ```

5. Registrar ambos archivos de estilos en `angular-cli.json`, quitando `styles.css` y agregar los siguientes archivos globales de diseño:

    ```json
   ...
   "styles": [
       "styles.less",
       "styles.sass",
       "../node_modules/mdi/css/materialdesignicons.css",
        "../node_modules/node-waves/dist/waves.css",
        "../node_modules/sweetalert2/dist/sweetalert2.css",
        "../node_modules/animate.css/animate.css"
   ],
   ...
    ```

6. Modificar `app.component.html` con el siguiente contenido:

    ```html
   <plex-app>  
   </plex-app>
    ```

7. Crear un componente `home.component.ts` con el siguiente contenido:

    ```typescript
   import { Component } from '@angular/core';

   @Component({
      template: 'Hello World',
   })
   export class HomeComponent {
   }
    ```

8. Crear el archivo `app.routing.ts` y registrar el componente:

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

9. En `app.module.ts` importar `PlexModule` y registrar los routings y `PlexService`: 

    ```typescript
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { FormsModule } from '@angular/forms';
   import { HttpModule } from '@angular/http';
   import { PlexModule } from 'andes-plex/src/lib/module';
   import { PlexService } from 'andes-plex/src/lib/core/service';
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
       PlexService,  
       appRoutingProviders  
     ],
     bootstrap: [AppComponent]
   })
   export class AppModule { }

    ```

8. Correr la aplicacion `ng serve` 

    ```
   ng serve
    ```

9. Navegar hasta `http://localhost:4200` 
