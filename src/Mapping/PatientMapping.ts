import { ModelPatient } from '../model/ModelPatient'

export const patientMapping = (data: any) => {
    return new ModelPatient(
        data.nomPatient,
        data.prenomPatient,
        data.mail,
        data.phone,
        )
}