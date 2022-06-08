import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { 
    this.tasks = []
  }

  ngOnInit() {
  }

  @Input()
  tasks: Task[];

  @Output()
  remove = new EventEmitter<number>();

  removeTask(taskIdx: number) {
	if(window.confirm("Czy na pewno chcesz usunac dane zadanie?")){
		this.remove.emit(taskIdx);
	}
  }
  
  done(e:Event){
    const btn = e.target as HTMLButtonElement
    const parent = btn.parentElement
    parent.style.textDecoration = parent.style.textDecoration==='line-through'?'none':'line-through'
    
  }
}
