import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // ✅ Correcto
    provideRouter(routes) // ✅ Esto soluciona el error de ActivatedRoute
  ]
}).catch((err) => console.error(err));


  // bootstrapApplication(AppComponent, {
  //   //   providers: [
  //   //     provideAnimations() 
  //   //   ]
  //   // }).catch(err => console.error(err));
    