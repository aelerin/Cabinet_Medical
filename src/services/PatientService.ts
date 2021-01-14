import { patientRepository } from '../repositories/Patientrepository';
import fs from 'fs';
import path from 'path';

class PatientService {

    public findAll() {
        return patientRepository.findAll()
    }

    public save(patient: any) {
        return patientRepository.save(patient)
    }

    public findById(id: string) {
        return patientRepository.findById(id)
    }

    public deleteById(id: string) {
        return patientRepository.deleteById(id)
    }

    public findByName(name: string) {
        return patientRepository.findByName(name)
    }

    public findByIdAndUpdate(id:string, patient: any) {
        return patientRepository.findByIdAndUpdate(id, patient)
    }
}

export const patientService = Object.freeze(new PatientService());