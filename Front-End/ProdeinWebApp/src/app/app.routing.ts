import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';



const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },  
    {path: 'navbar', component: NavbarComponent },
    {path: 'leftsidebar', component: LeftsidebarComponent }, 
    {path: 'content', component: ContentComponent },
    {path: 'footer', component: FooterComponent },  

    
    {path: '**', component: HomeComponent }
     
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);