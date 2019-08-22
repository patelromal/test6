import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
// import { MustMatch } from './must-match.validator';

@Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
    @Input('mustMatch') mustMatch: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return this.MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }

    private MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];

          // return null if controls haven't initialised yet
          if (!control || !matchingControl) {
            return null;
          }

          // return null if another validator has already found an error on the matchingControl
          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              console.log('return null working');
              return null;
          }

          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
}