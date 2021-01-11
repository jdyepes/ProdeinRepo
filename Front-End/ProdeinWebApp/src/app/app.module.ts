import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './common/layout/navbar/navbar.component';
import { LeftsidebarComponent } from './common/layout/leftsidebar/leftsidebar.component';
import { FooterComponent } from './common/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './core/helpers/auth.interceptor';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    LeftsidebarComponent,
    FooterComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   
    AppRoutingModule,  
    HttpClientModule, 
    BrowserAnimationsModule,
    MatTreeModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
  
  providers: [
    //appRoutingProviders
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
