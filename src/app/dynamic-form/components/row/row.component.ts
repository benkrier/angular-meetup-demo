import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormConfigObject } from '../../models/dynamic-form-config-object';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {
  formConfig: DynamicFormConfigObject;
  group: FormGroup;
}
