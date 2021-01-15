import mongoose from 'mongoose'

const creneauSchema = new mongoose.Schema({
    heure: String
})


const creneauModel = mongoose.model('creneau', creneauSchema);


export class CreneauRepository {
    public findAll() {
        return creneauModel.find().exec();
    }

    public findById(id: string) {
        return creneauModel.findById(id).exec();
    }
    public save(patient: any) {
        return new creneauModel(patient).save();
    }

    public deleteById(id: string) {
        return creneauModel.findByIdAndDelete(id);
    }

    public findByHour(heure: string) {
        return creneauModel.find({ 'Heure': heure });
    }

    public findByIdAndUpdate(id: string, creneau: any) {
        return creneauModel.findOneAndUpdate({ '_id': id }, creneau);
    }


}
export const creneauRepository = Object.freeze(new CreneauRepository)