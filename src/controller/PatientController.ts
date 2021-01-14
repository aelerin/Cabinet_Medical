import { patientService } from './../services/PatientService'

class PatientController {
    public findAll(req: any, res: any) {
        const data = patientService.findAll().then((data: any) => {
            res.json(data)
        })
    }
    public save(req: any, res: any) {
        const data = patientService.save(req.body).then((data: any) => {
            res.json(data)
        })
    }
    public findById(req: any, res: any) {
        const id = req.params.id
        const data = patientService.findById(id).then((data: any) => {
            res.json(data)
        })
    }
    public deleteById(req: any, res: any) {
        const id = req.params.id
        const data = patientService.deleteById(id).then((data: any) => {
            res.json(data)
        })
    }
    // public findByName(req: any, res: any) {
    //     const name = req.params.name
    //     patientService.findById(name).then((data: any) => {
    //         res.json(data);
    //     })
    // }
}

export const patientController = Object.freeze(new PatientController())