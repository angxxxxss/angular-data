import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem implements OnInit {
  @Input() name: string; // <-- proprietà della classe

  constructor() {
  }

  ngOnInit() {
  }
}
