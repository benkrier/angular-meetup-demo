import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DynamicFieldDirective} from './dynamic-field.directive';
import {Component, NgModule, ViewChild} from '@angular/core';

describe('DynamicFieldDirective', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;
  let componentEl: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldDirective, MockComponent],
      imports: [
        MockModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    componentEl = fixture.debugElement.nativeElement;
    component.directive.components = {input: MockInputComponent};
    fixture.detectChanges();
  });

  it('should create an instance of the directive', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new component', () => {
    const testContent = componentEl.querySelector('div').innerHTML;
    expect(testContent).toContain('mock content');
  });

  @Component({
    template: '<ng-container appDynamicField [formConfig]="mockFormConfig" [group]="mockGroup"></ng-container>'
  })
  class MockComponent {
    @ViewChild(DynamicFieldDirective, {static: true}) directive: DynamicFieldDirective;
    mockFormConfig = {type: 'input', label: 'Test Input', name: 'testInput'};
    mockGroup = {};
  }
  @Component({
    selector: 'app-mock-input',
    template: '<div>mock content</div>'
  })
  class MockInputComponent {
    formConfig;
    group;
  }
  @NgModule({
    declarations: [MockInputComponent],
    entryComponents: [MockInputComponent]
  })
  class MockModule {}
});
