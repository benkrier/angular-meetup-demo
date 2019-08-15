import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import {DynamicFormConfigObject} from '../dynamic-form/models/dynamic-form-config-object';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  formConfig: any[];
  formValid = false;
  formData: DynamicFormConfigObject;
  @ViewChild(DynamicFormComponent, { static: true })
  dynamicForm: DynamicFormComponent;

  constructor() {
    // Configuration passed to dynamic-form component.
    this.formConfig = [
      {
        type: 'title',
        title: 'Dynamic Forms Demo Info'
      },
      {
        type: 'row',
        rowFields: [
          {
            type: 'input',
            label: 'First Name',
            name: 'firstName',
            value: '',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Required'
              },
              {
                name: 'maxlength',
                validator: Validators.maxLength(20),
                message: 'Must be less than 20 characters'
              }
            ]
          },
          {
            type: 'input',
            label: 'Last Name',
            name: 'last Name',
            value: '',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Required'
              },
              {
                name: 'maxlength',
                validator: Validators.maxLength(20),
                message: 'Must be less than 20 characters'
              }
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.onFormChanges();
  }

  onFormChanges() {
    this.dynamicForm.changes.pipe(
      delay(0)
    ).subscribe(() => {
      this.formValid = this.dynamicForm.valid;
    });
  }

  save() {
    this.formData = this.dynamicForm.rawValue;
  }
}
