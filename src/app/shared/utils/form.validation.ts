import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function regularCharacterValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const stringValid = /[^A-Za-zá-úÁ-Ú\s\u00f1\u00d1]/.test(value);

        return stringValid ? {stringValid:true}: null;
    }
}