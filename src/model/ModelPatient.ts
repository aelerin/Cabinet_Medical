export class ModelPatient{
    nomPatient: String;
    prenomPatient: String;
    mail: String;
    phone: String;

    constructor(nomPatient:string, prenomPatient:string, mail:string, phone:string) {
        this.nomPatient = nomPatient;
        this.prenomPatient = prenomPatient;
        this.mail = mail;
        this.phone = phone;
    }
}