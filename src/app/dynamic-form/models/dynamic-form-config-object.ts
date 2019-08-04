import { ValidatorFn } from "@angular/forms";

export class DynamicFormConfigObject {
  type: string;
  title?: string;
  label?: string;
  name?: string;
  options?: Object[] | string[];
  value?: any;
  validations?: { name: string; validator: ValidatorFn; message: string }[];
  disabled?: boolean;
  rowFields?: DynamicFormConfigObject[];
}
