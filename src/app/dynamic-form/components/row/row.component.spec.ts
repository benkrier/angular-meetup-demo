import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RowComponent} from './row.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Directive, Input} from '@angular/core';

const MockGroup = new FormGroup({'testRowInput': new FormControl()});
const MockFormConfig = {type: 'row', rowfields: [{type: 'input', label: 'Test Row Input', name: 'testRowInput'}]};

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;
  let componentEl: any; // debugElement and nativeElement are type any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowComponent, MockDynamicFieldDirective ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.formConfig = MockFormConfig;
    component.group = MockGroup;
    componentEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain correct formConfig and group property data', () => {
    expect(component.formConfig.type).toEqual('row');
    expect(component.group['controls'].testRowInput).toBeTruthy();
  });

  it('should have div with display flex', () => {
    const flexWrapper = componentEl.querySelector('div[fxLayout="row wrap"]');
    expect(flexWrapper).toBeTruthy();
  });

  @Directive({
    selector: '[appDynamicField]'
  })
  class MockDynamicFieldDirective {
    @Input() formConfig;
    @Input() group: FormGroup;
  }
});
