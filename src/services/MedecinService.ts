import fs from 'fs';
import path from 'path';
import { medecinRepository } from '../repositories/MedecinRepository';


class MedecinService {
    public findAll() {
        return medecinRepository.findAll()
    }

    public save(medecin: any) {
        return medecinRepository.save(medecin);

    }

    public findById(id: string) {
        return medecinRepository.findById(id)
    }

    public deleteById(id: string) {
        return medecinRepository.deleteById(id)
    }

    public findByName(name: string) {
        return medecinRepository.findByName(name)
    }

    public findByIdAndUpdate(id:string, medecin: any) {
        return medecinRepository.findByIdAndUpdate(id, medecin)
    }
}

export const medecinService = Object.freeze(new MedecinService());