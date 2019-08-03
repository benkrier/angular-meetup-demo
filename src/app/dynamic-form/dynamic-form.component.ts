import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { DynamicFormConfigObject } from "./models/dynamic-form-config-model";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"]
})
export class DynamicFormComponent implements OnInit {
  @Input()
  formConfig: DynamicFormConfigObject[] = [];

  form: FormGroup;

  get changes() {
    return this.form.valueChanges;
  }
  get valid() {
    return this.form.valid;
  }
  get dirty() {
    return this.form.dirty;
  }
  get rawValue() {
    return this.form.getRawValue();
  }

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.formBuilder.group({});
    this.formConfig.forEach(control => {
      if (control.name) {
        group.addControl(control.name, this.createControl(control));
      } else if (control.rowFields) {
        control.rowFields.forEach(rowField => {
          group.addControl(rowField.name, this.createControl(rowField));
        });
      }
    });
    return group;
  }

  createControl(config: DynamicFormConfigObject) {
    const { value, disabled } = config;
    const validators = config.validations.map(x => x.validator);
    return this.formBuilder.control({ value, disabled }, validators);
  }
}
