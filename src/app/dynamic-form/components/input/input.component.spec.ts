import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MockGroup = new FormGroup({'testInput': new FormControl()});
const MockFormConfig = {type: 'input', label: 'Test Input', name: 'testInput'};

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let componentEl: any; // debugElement and nativeElement are type any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    componentEl = fixture.debugElement.nativeElement;
    component.formConfig = MockFormConfig;
    component.group = MockGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input field with correct formConfig label', () => {
    const placeholder = componentEl.querySelector('.mat-form-field-label');
    expect(placeholder.textContent.trim()).toBe('Test Input');
  });
});
