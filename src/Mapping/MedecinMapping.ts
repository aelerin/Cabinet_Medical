import {ModelMedecin} from '../model/ModelMedecin'

export const medecinMapping = (data:any) => {
    return new ModelMedecin( 
    data._id ,
    data.nomMedecin ,
    data.prenomMedecin,
    data.specialiteMedecin,
    data.descriptionMedecin,
    data.mailMedecin,
    )
}

// const pouletMapper = (data) => {
//     return new poulet(
//         data.nom, 
//         data.prenom
//         )
// }