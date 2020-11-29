import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { v4 as uuidv4 } from 'uuid';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  public tasks: Task[] = [];
  public listTitle: string = '';
  public taskTitle: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onRemove(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onCompleted(taskId: string): void {
    this.tasks = this.tasks.map(task=> {
      if(task.id === taskId){
        return { ...task, completed: !task.completed}
      }else{
        return task;
      }
    })
  }

  onClick(taskTitle: string): void {
    this.tasks.push({ id: uuidv4(), title: taskTitle, completed: false });
  }
}
