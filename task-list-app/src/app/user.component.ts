import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `<p>👤 User's name is: {{ name }}</p>`
})
export class UserComponent {
  @Input() name!: string;
}
