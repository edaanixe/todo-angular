import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  public checked = false;
  public completed = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  onClick(): void {
    this.remove.emit()
  }
  
}
