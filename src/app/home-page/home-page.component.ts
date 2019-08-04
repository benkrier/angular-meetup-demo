import { Component, OnInit, ViewChild } from "@angular/core";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  dataSource: any;
  tableConfig: any[];
  formConfig: any[];
  newTemplate = false;
  editTemplate = false;
  formValid = false;
  saving = false;
  deleting = false;
  @ViewChild(DynamicFormComponent) casechekForm: DynamicFormComponent;

  constructor() {
    // Configuration passed to casechek-table component
    this.tableConfig = [
      {
        columnDef: "firstName",
        header: "First Name",
        width: "300px",
        cell: (element: any) => `${element.firstName}`
      },
      {
        columnDef: "lastName",
        header: "Last Name",
        width: "300px",
        cell: (element: any) => `${element.lastName}`
      }
    ];

    // Configuration passed to casechek-form component. Note incorporation of dynamic data for form properties.
    this.formConfig = [
      {
        type: "title",
        title: "Label Template"
      },
      {
        type: "row",
        rowFields: [
          {
            type: "input",
            label: "First Name",
            name: "firstName",
            value: "",
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Required"
              },
              {
                name: "maxlength",
                validator: Validators.maxLength(20),
                message: "Must be less than 100 characters"
              }
            ]
          },
          {
            type: "input",
            label: "Last Name",
            name: "last Name",
            value: "",
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Required"
              },
              {
                name: "maxlength",
                validator: Validators.maxLength(20),
                message: "Must be less than 100 characters"
              }
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {}
}
