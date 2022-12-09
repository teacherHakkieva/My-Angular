import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordGroupValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (control) => {
      const group = control as FormGroup;
      const ctrl1 = group.get(controlName1);
      const ctrl2 = group.get(controlName2)
      return ctrl1?.value === ctrl2?.value ? null : { passwordGroupValidator: true };
    };
}
export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  if(!control.value){ return null;}
  const password = control.parent?.get('password')?.value;
  const rePassword = control.value;
  return password == rePassword ? null : {invalidPasswords: true}
}