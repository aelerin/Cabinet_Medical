import { patientRepository } from '../repositories/Patientrepository';
import { patientMapping} from '../Mapping/PatientMapping'

class PatientService {

    public findAll() {
        return patientRepository.findAll()
        .then(async (data: any) => await patientMapping(data));
    }

    public save(patient: any) {
        return patientRepository.save(patient)
    }

    public findById(id: string) {
        return patientRepository.findById(id)
        .then(async (data: any) => await patientMapping(data));
    }

    public deleteById(id: string) {
        return patientRepository.deleteById(id)
    }

    public findByName(name: string) {
        return patientRepository.findByName(name)
        .then(async (data: any) => await patientMapping(data));
    }

    public findByIdAndUpdate(id:string, patient: any) {
        return patientRepository.findByIdAndUpdate(id, patient)
    }
}

export const patientService = Object.freeze(new PatientService());