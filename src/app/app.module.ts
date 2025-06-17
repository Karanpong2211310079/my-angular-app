import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';

import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SignInComponent,
    AdminComponent,
    AdminPanelComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    PanelMenuModule,
    BadgeModule,
    CardModule
  ],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
