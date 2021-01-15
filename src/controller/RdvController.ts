import { rdvService } from './../services/RdvService'

class RdvController {
    public findAll(req: any, res: any) {
        const data = rdvService.findAll().then((data: any) => {
            res.json(data);
        });
    }
    public save(req: any, res: any) {
        const data = rdvService.save(req.body).then((data: any) => {
            res.json(data);
        });
    }

    public findById(req: any, res: any) {
        const id = req.params.id;
        const data = rdvService.findById(id).then((data: any) => {
            res.json(data);
        });
    }


    
    public deleteById(req: any, res: any) {
        const id = req.params.id
        const data = rdvService.deleteById(id).then((data: any) => {
            res.json(data);
        });
    }

    public findByDate(req: any, res: any) {
        const date = req.params.date
        const data = rdvService.findByDate(date).then((data: any) => {
            res.json(data);
        });
    }

    public findByIdCreneauAndDate(req: any, res: any) {
        const idCreneau = req.params.idCreneau
        const dateRdv = req.body.dateRdv
        const data = rdvService.findByIdCreneauAndDate(idCreneau, dateRdv).then((data: any) => {
            res.json(data);
        });
    }

    public findByIdAndUpdate(req:any, res:any) {
        const id = req.params.id;
        const rdv = req.body
        rdvService.findByIdAndUpdate(id, rdv).then((data:any) =>{
            res.json(data);
        });
    }
}
export const rdvController = Object.freeze(new RdvController())