import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
  name: string; // <-- proprietà della classe

  constructor() {
    this.name = 'Felipe'; // <-- inizializzazione nel costruttore
  }
}
