import { ModelPatient } from './../model/ModelPatient';
import { patientRepository } from '../repositories/Patientrepository';
import { patientMapping} from '../Mapping/PatientMapping'


class PatientService {

    public findAll() {
        return patientRepository.findAll()
        .then((data: any) => {
            let patients : ModelPatient[] = [];
            for(let d of data){
                patients.push(patientMapping(d))
            }
            return patients
        });
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
        // .then(async (data: any) => await patientMapping(data));
            .then((data: any) => {
                let patients : ModelPatient[] = [];
                for(let d of data){
                    patients.push(patientMapping(d))
                }
                return patients
            });
    }

    public findByIdAndUpdate(id:string, patient: any) {
        return patientRepository.findByIdAndUpdate(id, patient)
    }
}

export const patientService = Object.freeze(new PatientService());
