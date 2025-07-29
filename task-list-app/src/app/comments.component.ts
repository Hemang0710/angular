import { Component } from '@angular/core';

@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <h4>💬 Comments</h4>
    <ul>
      <li>This app is awesome!</li>
      <li>Angular's new syntax is 🔥</li>
      <li>Great job learning it!</li>
    </ul>
  `
})
export class CommentsComponent {}
