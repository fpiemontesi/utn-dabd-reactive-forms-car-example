import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { CarService } from "../car.service";
import { Observable, map } from "rxjs";

export class nameInUseValidator {
    static createValidator(carService: CarService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const value = carService
                .get(control.value)
                .pipe(
                    map((result: boolean) =>
                        result ? { carNameExist: true } as ValidationErrors : null
                    )
                );

            return value;
        };
    }
}