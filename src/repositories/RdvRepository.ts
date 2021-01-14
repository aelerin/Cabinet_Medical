import mongoose from 'mongoose'
import { hasUncaughtExceptionCaptureCallback } from 'process'

const rdvSchema = new mongoose.Schema({

},
    {
        versionKey: false
    }
)

const rdvModel = mongoose.model('patient', rdvSchema)


export class RdvRepository {
    public findAll() {
        return rdvModel.find().exec()
    }
    public save(patient: any) {
        return new rdvModel(patient).save()
    }
    public findById(id: string) {
        return rdvModel.findById(id).exec()
    }
    public deleteById(id: string) {
        return rdvModel.findByIdAndDelete(id)
    }

}

export const rdvRepository = Object.freeze(new RdvRepository)