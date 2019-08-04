import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormConfigObject } from "../../models/dynamic-form-config-object";

@Component({
  selector: "app-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"]
})
export class TextAreaComponent {
  formConfig: DynamicFormConfigObject;
  group: FormGroup;
}
