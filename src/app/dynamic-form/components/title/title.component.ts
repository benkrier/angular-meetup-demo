import { Component } from '@angular/core';
import {DynamicFormConfigObject} from '../../models/dynamic-form-config-object';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  formConfig: DynamicFormConfigObject;
}
