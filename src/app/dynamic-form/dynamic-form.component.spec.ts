import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Component, Directive, Input, ViewChild} from '@angular/core';
import {DynamicFormComponent} from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let mockParentComponent: MockParentComponent;
  let mockParentFixture: ComponentFixture<MockParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicFormComponent,
        MockParentComponent,
        MockDynamicFieldDirective,
      ],
      imports: [
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockParentFixture = TestBed.createComponent(MockParentComponent);
    mockParentComponent = mockParentFixture.componentInstance;
    mockParentFixture.detectChanges();
  });

  it('should create', () => {
    expect(mockParentComponent).toBeTruthy();
  });

  it('#changes: should return valueChanges', () => {
    const formValueChanges = mockParentComponent.dynamicFormComponent.form.valueChanges;
    const getter = mockParentComponent.dynamicFormComponent.changes;
    expect(getter).toEqual(formValueChanges);
  });

  it('#valid: should return valid', () => {
    const formValid = mockParentComponent.dynamicFormComponent.form.valid;
    const getter = mockParentComponent.dynamicFormComponent.valid;
    expect(getter).toEqual(formValid);
  });

  it('#dirty: should return dirty', () => {
    const formDirty = mockParentComponent.dynamicFormComponent.form.dirty;
    const getter = mockParentComponent.dynamicFormComponent.dirty;
    expect(getter).toEqual(formDirty);
  });

  it('#rawValue: should return getRawValue', () => {
    const formRawValue = mockParentComponent.dynamicFormComponent.form.getRawValue();
    const getter = mockParentComponent.dynamicFormComponent.rawValue;
    expect(getter).toEqual(formRawValue);
  });

  it('#createControl: should build a formControl based on input configObject', () => {
    const MockConfigObject = mockParentComponent.mockFormConfig[1];
    const MockFormControl = mockParentComponent.dynamicFormComponent.createControl(MockConfigObject);
    expect(MockFormControl.value).toEqual('First Name Test');
  });

  it('#createControl: should pass the correct validators and disabled status to new formControl', () => {
    const spy = spyOn(mockParentComponent.dynamicFormComponent.formBuilder, 'control');
    const MockConfigObject = mockParentComponent.mockFormConfig[1];
    mockParentComponent.dynamicFormComponent.createControl(MockConfigObject);
    expect(spy)
      .toHaveBeenCalledWith(
        {
          value: MockConfigObject.value,
          disabled: MockConfigObject.disabled
        },
        [
          MockConfigObject.validations[0].validator,
          MockConfigObject.validations[1].validator
        ]
      );
  });

  it('#createGroup: should build formGroup based on input formConfig', () => {
    expect(mockParentComponent.dynamicFormComponent.form.controls['firstName']).toBeTruthy();
    expect(mockParentComponent.dynamicFormComponent.form.controls['lastName']).toBeTruthy();
  });

  @Component({
    selector: 'app-mock-parent-component',
    template: '<app-dynamic-form [formConfig]="mockFormConfig"></app-dynamic-form>'
  })
  class MockParentComponent {
    @ViewChild(DynamicFormComponent, {static: true})
    public dynamicFormComponent: DynamicFormComponent;
    mockFormConfig = [
      {
        type: 'title',
        title: 'Test Title',
      },
      {
        type: 'input',
        label: 'First Name',
        name: 'firstName',
        value: 'First Name Test',
        disabled: false,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Required'
          },
          {
            name: 'maxlength',
            validator: Validators.maxLength(20),
            message: 'Must be less than 20 characters'
          }
        ],
      },
      {
        type: 'row',
        rowFields: [
          {
            type: 'input',
            label: 'Last Name',
            name: 'lastName',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Required'
              },
              {
                name: 'maxlength',
                validator: Validators.maxLength(20),
                message: 'Must be less than 20 characters'
              }
            ]
          },
        ]},
    ];
  }

  @Directive({
    selector: '[appDynamicField]'
  })
  class MockDynamicFieldDirective {
    @Input() formConfig;
    @Input() group: FormGroup;
  }
});

