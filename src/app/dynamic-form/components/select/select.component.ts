import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicFormConfigObject } from "../../models/dynamic-form-config-object";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent {
  formConfig: DynamicFormConfigObject;
  group: FormGroup;
}
