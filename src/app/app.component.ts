import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'postal',
      type: 'input',
      className: 'postcode-input-e2e',
      parsers: [(value: string) => value?.toUpperCase()],
      templateOptions: {
        label: 'Postal code',
        type: 'text',
        appearance: 'outline',
      },
      expressionProperties: {
        'model.postal': 'model.postal',
      },
      modelOptions: {
        updateOn: 'blur',
      },
    },
    {
      key: 'housenumber',
      type: 'input',
      className: 'huisnummer-input-e2e',
      templateOptions: {
        label: 'House number',
        type: 'text',
        appearance: 'outline',
      },
      expressionProperties: {
        'model.huisnummer': 'model.huisnummer',
      },
      modelOptions: {
        updateOn: 'blur',
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
