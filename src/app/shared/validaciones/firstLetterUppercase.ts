import {AbstractControl, ValidatorFn} from '@angular/forms'

export function firstLetterUppercase() : ValidatorFn {
    return (control: AbstractControl) => {
        const valor = control.value as string;
        if(!valor) return
        if(valor.length === 0) return;

        const firstLetter = valor[0];
        if(firstLetter !== firstLetter.toUpperCase()) {
            return {
                firstLetterUppercase : {
                    message: "La primera letra debe ser mayuscula"
                }
            }
        }
        
        return;
    }
}