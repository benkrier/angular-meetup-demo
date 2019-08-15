import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { TitleComponent } from './components/title/title.component';
import { RowComponent } from './components/row/row.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    DynamicFormComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    DynamicFieldDirective,
    TitleComponent,
    RowComponent,
    DynamicFormComponent
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    TitleComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    RowComponent
  ]
})
export class DynamicFormModule {}
