import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {TextAreaComponent} from './text-area.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MockGroup = new FormGroup({'testTextarea': new FormControl()});
const MockFormConfig = {type: 'textAreaLg', label: 'Test Textarea', name: 'testTextarea'};

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;
  let componentEl: any; // debugElement and nativeElement are type any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaComponent ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    component.formConfig = MockFormConfig;
    component.group = MockGroup;
    componentEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render textarea field with correct formConfig placeholder', () => {
    const placeholder = componentEl.querySelector('.mat-form-field-label');
    expect(placeholder.textContent.trim()).toBe('Test Textarea');
  });

  it('#triggerResize: should fire when value changes in textarea field', fakeAsync(() => {
    spyOn(component, 'triggerResize');
    const textArea = componentEl.querySelector('textarea[ng-reflect-name="testTextarea"]');
    textArea.value = 'test code block value';
    textArea.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.triggerResize).toHaveBeenCalled();
  }));
});
