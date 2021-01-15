export class ModelMedecin{
    _id : String;
    nomMedecin: String;
    prenomMedecin: String;
    specialiteMedecin: String;
    descriptionMedecin: String;
    mailMedecin: String;

    constructor(_id:string,nomMedecin:string,prenomMedecin:string,specialiteMedecin:string,descriptionMedecin:string,mailMedecin:string){
        this._id = _id;
        this.nomMedecin = nomMedecin;
        this.prenomMedecin = prenomMedecin;
        this.specialiteMedecin = specialiteMedecin;
        this.descriptionMedecin = descriptionMedecin;
        this.mailMedecin = mailMedecin;
    }
}


