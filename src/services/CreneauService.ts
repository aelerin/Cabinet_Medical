import { creneauRepository } from '../repositories/CreneauRepository';


class CreneauService {
    public findAll() {
        return creneauRepository.findAll()
    }

    public save(creneau: any) {
        return creneauRepository.save(creneau);

    }

    public findById(id: string) {
        return creneauRepository.findById(id)
    }

    public deleteById(id: string) {
        return creneauRepository.deleteById(id)
    }

    public findByHour(hour: string) {
        return creneauRepository.findByHour(hour)
    }

    public findByIdAndUpdate(id: string, creneau: any) {
        return creneauRepository.findByIdAndUpdate(id, creneau)
    }

}

export const creneauService = Object.freeze(new CreneauService());