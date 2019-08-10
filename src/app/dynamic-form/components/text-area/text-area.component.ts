import {Component, NgZone, ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {DynamicFormConfigObject} from '../../models/dynamic-form-config-object';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  formConfig: DynamicFormConfigObject;
  group: FormGroup;
  @ViewChild('autosize', { static: true }) autosize: CdkTextareaAutosize;

  constructor(private ngZone: NgZone) { }

  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
