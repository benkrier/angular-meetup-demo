import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SelectComponent} from './select.component';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MockGroup = new FormGroup({'testSelect': new FormControl({value: ''})});
const MockFormConfig = {type: 'select', label: 'Test Select', name: 'testSelect', options: ['test option 1']};

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let componentEl: any; // debugElement and nativeElement are type any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.formConfig = MockFormConfig;
    component.group = MockGroup;
    componentEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render select form with correct formConfig placeholder', () => {
    const placeholder = componentEl.querySelector('.mat-select-placeholder');
    expect(placeholder.textContent.trim()).toBe('Test Select');
  });
});
