import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Person } from "../../models/person.model";

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <div *ngFor="let p of persons">
      <p>{{p.name}} | <a [routerLink]="['/person-detail', p.id]">View Detail</a> </p>
    </div>
  `,
  styleUrls: ['person.component.css']
})
export class PersonComponent {
  @Input() persons?: Person[];
}
