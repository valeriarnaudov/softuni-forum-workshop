import { FormGroup, ValidatorFn } from '@angular/forms';

export function sameValueGroupValidator(
  controlName1: string,
  controlName2: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const cntr1 = group.get(controlName1);
    const cntr2 = group.get(controlName2);
    return cntr1?.value === cntr2?.value
      ? null
      : { sameValueGroupValidator: true };
  };
}
