import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from "./components/person/person.component";
import { Person } from "./models/person.model";
import { PersonService } from "./services/person.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonComponent],
  template: `
    <h3>{{title}}</h3>
    <app-person [persons]="persons"></app-person>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = "Person List";
  persons?: Person[];

  constructor(private service: PersonService) {}

  ngOnInit() {
    this.service.getAllPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }
}
