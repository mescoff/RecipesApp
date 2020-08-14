export interface IValidationStatus{
  isValid:boolean;
  errorMessage?:string;
}

export default class Validate {
    static validateDigit = (value: string, limit:number = 300): IValidationStatus => {
        let validationStatus: IValidationStatus = {isValid: true};
        const digitRegx = '^([0-9])+$';
        const validation = new RegExp(digitRegx);
        const isValidDigit = validation.test(value);

        if (!isValidDigit){
          validationStatus = {isValid: false, errorMessage: 'Input is not an integer'};
        }
        const valueToDigit = parseInt(value, 10);
        // TODO: for now we set 
        if (valueToDigit < 0 || valueToDigit > limit){
          validationStatus = {isValid: false, errorMessage: `Input an integer between 0 and ${limit}`};
        }
        return validationStatus;
    }
}