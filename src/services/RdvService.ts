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

    public findByIdCrenauAndDate(idCreneau: string, date: string) {
        return rdvRepository.findByIdCrenauAndDate(idCreneau, date)
    }

    public deleteById(id: string) {
        return rdvRepository.deleteById(id)
    }
}

export const rdvService = Object.freeze(new RdvService());