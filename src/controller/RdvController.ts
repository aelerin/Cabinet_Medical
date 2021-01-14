import { rdvService } from './../services/RdvService'

class RdvController {
    public findAll(req: any, res: any) {
        const data = rdvService.findAll().then((data: any) => {
            res.json(data)
        })
    }
    public save(req: any, res: any) {
        const data = rdvService.save(req.body).then((data: any) => {
            res.json(data)
        })
    }
    // public findById(req: any, res: any) {
    //     const id = req.params.id
    //     const data = rdvService.findById(id).then((data: any) => {
    //         res.json(data)
    //     })
    // }
    public deleteById(req: any, res: any) {
        const id = req.params.id
        const data = rdvService.deleteById(id).then((data: any) => {
            res.json(data)
        })
    }
}
export const rdvController = Object.freeze(new RdvController())