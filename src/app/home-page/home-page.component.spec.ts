import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

const testBehaviorSubject = new  BehaviorSubject({value: ''});
// Mock component for casechek-form
@Component({
  selector: 'app-dynamic-form',
  template: '',
  providers: [
    {
      provide: FormBuilder,
      useValue: {}
    }
  ]
})
class MockDynamicFormComponent implements OnInit {
  @Input() formConfig;
  form = this.createGroup();
  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {}
  createGroup() { return new FormGroup({}); }
  createControl() { return new FormControl(''); }
  get changes() { return testBehaviorSubject; }
  get valid() { return this.form.valid; }
  get dirty() { return this.form.dirty; }
  get rawValue() { return {
    firstName: 'Testfirstname',
    lastName: 'Testlastname'
  }; }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        MockDynamicFormComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    component.dynamicForm = TestBed.createComponent(MockDynamicFormComponent).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
