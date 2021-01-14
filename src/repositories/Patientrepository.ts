import mongoose from 'mongoose'
import { hasUncaughtExceptionCaptureCallback } from 'process'

const patientSchema = new mongoose.Schema({
    name: String,
    lastname: String,
},
    {
        versionKey: false
    }
)

const patientModel = mongoose.model('patient', patientSchema)


export class PatientRepository {
    public findAll() {
        return patientModel.find().exec()
    }
    public save(patient: any) {
        return new patientModel(patient).save()
    }
    public findById(id: string) {
        return patientModel.findById(id).exec()
    }
    public deleteById(id: string) {
        return patientModel.findByIdAndDelete(id)
    }
    // public findByName(name: string) {
    //     return patientModel.findByName(name)
    // }
}

export const patientRepository = Object.freeze(new PatientRepository)