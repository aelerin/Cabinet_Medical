import { patientController } from "./controller/PatientController";
import { medecinController } from "./controller/MedecinController";
import { rdvController } from "./controller/RdvController";


export const setRouting = (server: any) => {
    // *Gestion patient*
    server.get('/patients', patientController.findAll);
    server.get('/patients/:id', patientController.findById)
    server.get('/patient-name/:name', patientController.findByName)
    server.post('/patients', patientController.save)
    server.put('/patients/:id',patientController.findByIdAndUpdate)
    server.delete('/patients/:id', patientController.deleteById)


    // *Gestion medecin*
    server.get('/medecins', medecinController.findAll);
    server.get('/medecins/:name', medecinController.findByName)
    server.post('/medecins', medecinController.save)
    server.put('/medecins/:id',medecinController.findByIdAndUpdate)
    server.delete('/medecins/:id', medecinController.deleteById)

    // *Gestion des rendez-vous*
    // server.get('/medecin/date', rdvController.findAll);
    // server.post('/medecin/date', rdvController.save)
    // server.get('/medecin/:date', rdvController.findByDate)
    // server.delete('/medecin/date/:year:month:week:day:hour', rdvController.findByDate)


}
