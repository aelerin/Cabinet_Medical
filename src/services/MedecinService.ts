import { ModelMedecin } from '../model/ModelMedecin';
import { medecinRepository } from '../repositories/MedecinRepository';
import { medecinMapping} from '../Mapping/MedecinMapping'


class MedecinService {
    public findAll() {
        return medecinRepository.findAll()
            .then(async (data: any) => await medecinMapping(data));
    }

    public save(medecin: any) {
        return medecinRepository.save(medecin);
    }

    
    public findById(id: string) {
        return medecinRepository.findById(id)
            .then(async (data: any) => await medecinMapping(data));
    }

    public deleteById(id: string) {
        return medecinRepository.deleteById(id);
    }

    public findByName(name: string) {
        return medecinRepository.findByName(name)
        .then(async (data: any) => await medecinMapping(data));
    }

    public findByIdAndUpdate(id: string, medecin: any) {
        return medecinRepository.findByIdAndUpdate(id, medecin);
    }

    public findBySpecialty(specialite: string) {
        return medecinRepository.findBySpecialty(specialite)
        .then(async (data: any) => await medecinMapping(data));
    }
}

export const medecinService = Object.freeze(new MedecinService());