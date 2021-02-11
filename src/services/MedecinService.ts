import { ModelMedecin } from '../model/ModelMedecin';
import { medecinRepository } from '../repositories/MedecinRepository';
import { medecinMapping} from '../Mapping/MedecinMapping'


class MedecinService {
    public findAll() {
        return medecinRepository.findAll()
            .then((data: any) => {
                let medecins: ModelMedecin[] = []; 
                for (let d of data) {
                    medecins.push(medecinMapping(d));
                }
                return medecins;
            });
    }

    public save(medecin: any) {
        return medecinRepository.save(medecin);
    }

    
    public findById(id: string) {
        return medecinRepository.findById(id)
            .then((data: any) => medecinMapping(data));
    }

    public deleteById(id: string) {
        return medecinRepository.deleteById(id);
    }

    public findByName(name: string) {
        return medecinRepository.findByName(name)
        .then((data: any) => {
            let medecins : ModelMedecin[] = [];
            for(let d of data){
                medecins.push(medecinMapping(d));
            }
            return medecins
        });
    }

    public findByIdAndUpdate(id: string, medecin: any) {
        return medecinRepository.findByIdAndUpdate(id, medecin);
    }

    public findBySpecialty(specialite: string) {
        return medecinRepository.findBySpecialty(specialite)
        // .then(async (data: any) => await medecinMapping(data));
            .then((data: any) => {
                let medecins : ModelMedecin[] = [];
                for(let d of data){
                    medecins.push(medecinMapping(d));
                }
                return medecins
            });
    }
}

export const medecinService = Object.freeze(new MedecinService());
