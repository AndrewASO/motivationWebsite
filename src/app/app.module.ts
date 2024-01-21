import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifDisplayComponent } from './gif-display/gif-display.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { TimeWidgetComponent } from './time-widget/time-widget.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    GifDisplayComponent,
    HeaderComponent,
    HomeComponent,
    LanguagesComponent,
    SignupComponent,
    LoginComponent,
    TasksComponent,
    ProgressWidgetComponent,
    WeatherWidgetComponent,
    TimeWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
