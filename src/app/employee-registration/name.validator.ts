import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return {cannotContainSpace: true}
        }

        return null;
    }


    static nameShouldbeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                if(control.value==='ram')
                    resolve({nameShouldbeUnique:true});
                else 
                    return resolve(null);
            },2000);
        });
    }



}