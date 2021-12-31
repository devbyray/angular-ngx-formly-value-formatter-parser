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
      key: 'initials',
      type: 'input',
      parsers: [(value: string) => this.formatInitials(value)],
      templateOptions: {
        label: 'Initials',
        type: 'text',
        appearance: 'outline',
      },
      expressionProperties: {
        'model.initials': 'model.initials',
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

  public formatInitials(value: string): string {
    if (!value || value === '') {
      return value;
    }

    let format = value.split('').map((val) => val.toUpperCase());
    let formatted = [];

    if (value.toLowerCase().includes('th')) {
      const regex = /(\bth\b)/gm;
      format = value.trim().split(regex);
      formatted = format
        .filter((val) => /\w+/gm.test(val))
        .map((val) => {
          return val.trim().split(/\W+/gm);
        })
        .flat();
    } else {
      formatted = format.map((val) => val.trim());
    }

    const voorletters =
      formatted
        .filter((val) => /\w+/gm.test(val))
        .map((val) => val.trim().replace('.', '').replace(',', ''))
        .map((val) => {
          if (!val.toLowerCase().includes('th')) {
            return val.toUpperCase();
          }
          return val;
        })
        .join('.') + '.';

    return voorletters;
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
