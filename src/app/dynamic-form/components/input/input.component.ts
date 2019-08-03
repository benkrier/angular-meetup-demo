import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormConfigObject } from "../../models/dynamic-form-config-model";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent {
  formConfig: DynamicFormConfigObject;
  group: FormGroup;
}
