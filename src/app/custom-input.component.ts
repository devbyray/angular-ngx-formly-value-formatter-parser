import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <input [type]="type" [formControl]="formControl" [formlyAttributes]="field">
  `,
})
export class FormlyFieldCustomInput extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */