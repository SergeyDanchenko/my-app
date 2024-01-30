import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable()
export class PersonService {
  getAllPersons(): Observable<Person[]> {
    return of(
      [
        { id: 101, name: 'Mohit', age: 25, city: 'Varanasi' },
        { id: 102, name: 'Krishn', age: 30, city: 'Delhi' },
        { id: 103, name: 'Shiv', age: 35, city: 'Patna' }
      ]
    );
  }

  getPersonById(id: number): Observable<Person> {
    return this.getAllPersons().pipe(
      map(allPersons => allPersons.find(p => p.id === id) as Person)
    );
  }
}
