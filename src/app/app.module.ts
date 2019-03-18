import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTERS } from './app.routes';
import { PAGES_ROUTES } from './pages/pages.routes';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Modulos
import { PageModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PageModule,
    APP_ROUTERS,
    PAGES_ROUTES,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
