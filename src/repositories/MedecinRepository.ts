import mongoose from 'mongoose'

const medecinSchema = new mongoose.Schema({
        nomMedecin: String,
        prenomMedecin: String,
        specialiteMedecin: String,
        descriptionMedecin: String,
        mailMedecin: String,
        passwordMedecin: String,
    },
    {
        versionKey: false
    })


const medecinModel = mongoose.model('medecin', medecinSchema);


export class MedecinRepository {
    public findAll() {
        return medecinModel.find().exec();
    }

    public findById(id: string) {
        return medecinModel.findById(id).exec();
    }

    public save(medecin: any) {
        return new medecinModel(medecin).save();
    }

    public deleteById(id: string) {
        return medecinModel.findByIdAndDelete(id);
    }

    public findByName(name: string) {
        return medecinModel.find({'nomMedecin': name});
    }

    public findByIdAndUpdate(id: string, medecin: any) {
        return medecinModel.findOneAndUpdate({'_id': id}, medecin, {new: true});
    }

    public findBySpecialty(specialite: string) {
        return medecinModel.find({'specialiteMedecin': specialite});
    }
}

export const medecinRepository = Object.freeze(new MedecinRepository)
