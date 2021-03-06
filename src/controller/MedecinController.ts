import { medecinService } from "../services/MedecinService"

class MedecinController {
    public findAll(req: any, res: any) {
        const data = medecinService.findAll().then((data: any) => {
            res.json(data);
        });
    }

    public save(req: any, res: any) {
        medecinService.save(req.body).then((data: any) => {
            res.json(data);
        })
    }

    public findById(req: any, res: any) {
        const id = req.params.id;
        medecinService.findById(id)
            .then((data: any) => {
                res.json(data);
            })
    }

    public findByName(req: any, res: any) {
        const name = req.params.name;
        medecinService.findByName(name).then((data: any) => {
            res.json(data);
        })
    }

    public findBySpecialty(req: any, res: any) {
        const specialite = req.params.specialite;
        medecinService.findBySpecialty(specialite).then((data: any) => {
            res.json(data);
        })
    }

    public deleteById(req: any, res: any) {
        const id = req.params.id;
        medecinService.deleteById(id).then((data: any) => {
            res.json(data);
        });
    } 

    public findByIdAndUpdate(req:any, res:any) {
        const id = req.params.id;
        const medecin = req.body;
        medecinService.findByIdAndUpdate(id, medecin).then((data:any) =>{
            res.json(data);
        })
    }

}

export const medecinController = Object.freeze(new MedecinController())