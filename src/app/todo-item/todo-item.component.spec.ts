import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let rootElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    rootElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task as completed', () => {
    component.completed = true;

    fixture.detectChanges();

    const elem = rootElement.query(By.css('.completed'));

    expect(elem).toBeTruthy();
  });

  it('should display task as finished', () => {
    component.completed = true;

    fixture.detectChanges();

    const elem = rootElement.query(By.css('.checkbox'));

    expect(elem.nativeElement.value).toBeTruthy();
  });

  it('should trigger onRemove event', () => {
    spyOn(component.remove, 'emit');

    rootElement.query(By.css('.remove')).nativeElement.click();

    expect(component.remove.emit).toHaveBeenCalled();
  });
});
