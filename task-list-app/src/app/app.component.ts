import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ChildComponent } from './child.component';
import { CommentsComponent } from './comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent, ChildComponent, CommentsComponent],
  styleUrls: ['./app.component.css'],
  template: `
    <div class="app-container">
      <h1>🌟 Angular Feedback App</h1>

      <p>Hello from {{ city }}! (1 + 1 = {{ 1 + 1 }})</p>

      <section (mouseover)="onHover()">
        Hover here: <strong>{{ hoverMessage }}</strong>
      </section>

      <p *ngIf="isServerRunning" class="status running">✅ Server is running</p>
      <p *ngIf="!isServerRunning" class="status stopped">❌ Server is not running</p>

      <h3>User List</h3>
      <ul>
        <li *ngFor="let user of users; trackBy: trackByUserId">{{ user.name }}</li>
      </ul>

      <!-- This div is editable -->
      <div contenteditable="true" class="editable" #editableDiv>
        Edit this text freely!
      </div>

      <app-user [name]="'Simran'"></app-user>

      <app-child (addItemEvent)="addItem($event)"></app-child>
      <p>🐢 Feedback count: {{ items.length }}</p>

      <comments></comments>
    </div>
  `
})
export class AppComponent {
  city = 'San Francisco';
  isServerRunning = true;
  hoverMessage = '';
  items: string[] = [];

  users = [
    { id: 1, name: 'Sarah' },
    { id: 2, name: 'Amy' },
    { id: 3, name: 'Rachel' },
    { id: 4, name: 'Jessica' },
    { id: 5, name: 'Poornima' }
  ];

  onHover() {
    this.hoverMessage = 'You hovered! 🎉';
  }

  addItem(item: string) {
    this.items.push(item);
  }

  trackByUserId(index: number, user: any) {
    return user.id;
  }
}
