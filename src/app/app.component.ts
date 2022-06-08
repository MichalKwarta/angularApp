import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tasks: Task[] = [];

  handleTaskAdd(description: string) {
    if (description && description.length > 0) {
      this.tasks.push({ description });
    }
  }

  handleTaskRemove(taskIdx: number) {
    this.tasks.splice(taskIdx, 1);
  }
}
