import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { v4 as uuidv4 } from 'uuid';
import { ReactiveFormsModule  } from '@angular/forms';

fdescribe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let rootElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoListComponent, 
        TodoItemComponent
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    rootElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.listTitle).toEqual('');
    expect(component.tasks.length).toBe(0);
    expect(component.taskTitle.value).toEqual('');
  });

  it('should render todo list title', () => {
    component.listTitle = 'Daily chores';

    fixture.detectChanges();

    const elem = rootElement.query(By.css('.card-title'));

    expect(elem.nativeElement.textContent).toEqual('Daily chores')
  });

  it('should add task to the list', () => {
    const input = rootElement.query(By.css('.todo-list-input'));

    expect(input.nativeElement.value).toEqual('');

    input.nativeElement.value = 'Buy wine';
    input.nativeElement.dispatchEvent(new Event('change'));

    expect(input.nativeElement.value).toEqual('Buy wine');
  });

  it('should remove item from task list', () => {
    const taskId = uuidv4();
    let tasksElem: DebugElement;
    component.tasks = [
      { id: taskId, title: 'Study for exam', completed: false },
    ];

    fixture.detectChanges();

    tasksElem = rootElement.query(By.directive(TodoItemComponent));

    expect(tasksElem).toBeTruthy();

    component.onRemove(taskId);

    fixture.detectChanges();

    tasksElem = rootElement.query(By.directive(TodoItemComponent));

    expect(tasksElem).toBeFalsy();
  });
});
