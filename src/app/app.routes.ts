import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'app-home', component: HomeComponent},
    {path: 'app-aboutus', component: AboutusComponent},
    {path: 'app-contact', component: ContactComponent}
];
