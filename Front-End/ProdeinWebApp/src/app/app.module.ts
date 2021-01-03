import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './common/layout/navbar/navbar.component';
import { LeftsidebarComponent } from './common/layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from './common/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './core/helpers/auth.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    LeftsidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   
    AppRoutingModule,  
    HttpClientModule
  ],
  
  providers: [
    //appRoutingProviders
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
