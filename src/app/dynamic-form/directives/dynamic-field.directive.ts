import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent } from "../components/input/input.component";
import { SelectComponent } from "../components/select/select.component";
import { TextAreaComponent } from "../components/text-area/text-area.component";
import { TitleComponent } from "../components/title/title.component";
import { RowComponent } from "../components/row/row.component";
import { DynamicFormConfigObject } from "../models/dynamic-form-config-model";

@Directive({
  selector: "[fuseDynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() formConfig: DynamicFormConfigObject;
  @Input() group: FormGroup;
  components;
  component;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
    this.components = {
      title: TitleComponent,
      input: InputComponent,
      select: SelectComponent,
      textAreaLg: TextAreaComponent,
      row: RowComponent
    };
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory<any>(
      this.components[this.formConfig.type]
    );
    this.component = this.container.createComponent(factory);
    this.component.instance.formConfig = this.formConfig;
    this.component.instance.group = this.group;
  }
}
