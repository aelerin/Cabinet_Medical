import mongoose from 'mongoose'
import { hasUncaughtExceptionCaptureCallback } from 'process'

const rdvSchema = new mongoose.Schema({
    dateRdv: String,
    idCreneau: String,
    idPatient: String,
    idMedecin: String,
    rdvAnnule: Boolean,
},
    {
        versionKey: false
    }
)

const rdvModel = mongoose.model('rdv', rdvSchema)


export class RdvRepository {

    public findAll() {
        return rdvModel.find().exec()
    }
    public save(rdv: any) {
        return new rdvModel(rdv).save()
    }
    public findById(id: string) {
        return rdvModel.findById(id).exec()
    }
    public deleteById(id: string) {
        return rdvModel.findByIdAndDelete(id)
    }

    public findByDate(date: string) {
        return rdvModel.find({ 'dateRdv': date })
    }

    public findByIdCreneauAndDate(idCreneau: string, dateRdv: string) {
        return rdvModel.find({ 'idCreneau': idCreneau, 'dateRdv': dateRdv } ,{new: true})
    }

    
    public findByIdAndUpdate(id: string, rdv: any) {
        return rdvModel.findOneAndUpdate({'_id': id}, rdv ,{new: true});
    }

}

export const rdvRepository = Object.freeze(new RdvRepository)