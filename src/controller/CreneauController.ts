import { creneauService } from "../services/CreneauService"


class CreneauController {
    public findAll(req: any, res: any) {
        const data = creneauService.findAll().then((data: any) => {
            res.json(data);
        });
    }


    public findById(req: any, res: any) {
        const id = req.params.id;
        creneauService.findById(id).then((data: any) => {
            res.json(data);
        })
    }

    public save(req: any, res: any) {
        creneauService.save(req.body).then((data: any) => {
            res.json(data);
        })
    }

    public deleteById(req: any, res: any) {
        const id = req.params.id;
        creneauService.deleteById(id).then((data: any) => {
            res.json(data);
        });
    }

    public findByIdAndUpdate(req: any, res: any) {
        const id = req.params.id;
        const creneau = req.body;
        creneauService.findByIdAndUpdate(id, creneau).then((data: any) => {
            res.json(data);
        })
    }


}

export const creneauController = Object.freeze(new CreneauController())