import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TitleComponent} from './title.component';

const MockFormConfig = {type: 'title', title: 'Test Title'};

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let componentEl: any; // debugElement and nativeElement are type any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    componentEl = fixture.debugElement.nativeElement;
    component.formConfig = MockFormConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title component with correct formConfig title value', () => {
    const placeholder = componentEl.querySelector('.dynamic-form__section-title');
    expect(placeholder.textContent.trim()).toBe('Test Title');
  });
});
