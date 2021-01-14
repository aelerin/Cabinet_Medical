import mongoose from 'mongoose'

const medecinSchema = new mongoose.Schema({
    nomMedecin: String,
    prenomMedecin: String
    // creneauMedecin : string 
})


const medecinModel = mongoose.model('medecin', medecinSchema)


export class MedecinRepository {
    public findAll() {
        return medecinModel.find.exec()
    }

    public findById(id: string) {
        return medecinModel.findById(id).exec()
    }
    public save(patient: any) {
        return new medecinModel(patient).save()
    }

    public deleteById(id: string) {
        return medecinModel.deleteById(id)
    }

    public findByName(name: string) {
        return medecinModel.findByName(name)
    }

}

export const medecinRepository = Object.freeze(new MedecinRepository) 
