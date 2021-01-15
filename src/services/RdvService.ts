import { rdvRepository } from '../repositories/RdvRepository';


class RdvService {

    public findAll() {
        return rdvRepository.findAll()
    }

    public save(Rdv: any) {
        return rdvRepository.save(Rdv)
    }

    public findByDate(date: string) {
        return rdvRepository.findByDate(date)
    }

    public findById(id: string) {
        return rdvRepository.findById(id)
    }

    public findByIdCreneauAndDate(idCreneau: string, dateRdv: string) {
        return rdvRepository.findByIdCreneauAndDate(idCreneau, dateRdv)
    }

    public deleteById(id: string) {
        return rdvRepository.deleteById(id)
    }

    public findByIdAndUpdate(id: string, rdv: any) {
        return rdvRepository.findByIdAndUpdate(id, rdv)
    }
}

export const rdvService = Object.freeze(new RdvService());