import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
  @Input()
  public completed = false;

  constructor() {}

  ngOnInit(): void {}

  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
}
