import { Routes } from '@angular/router';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

export const routes: Routes = [
  { path: 'person-detail/:id', component: PersonDetailComponent },
];
