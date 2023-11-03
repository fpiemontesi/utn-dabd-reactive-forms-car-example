import { AbstractControl, ValidationErrors } from "@angular/forms";

export function urlValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value.startsWith('http')) {
        const error: ValidationErrors = {
            invalidUrl: true
        };

        return error;
    }

    return null;
}