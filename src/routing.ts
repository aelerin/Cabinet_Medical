import { patientController } from "./controller/PatientController";
import { medecinController } from "./controller/MedecinController";
import { rdvController } from "./controller/RdvController";


export const setRouting = (server: any) => {
    // *Gestion patient*
    server.get('/patients', patientController.findAll);
    server.post('/patient', patientController.save)
    server.put('/patient-update/:id',patientController.findByIdAndUpdate)
    server.get('/patient/:id', patientController.findById)
    server.get('/patient-name/:name', patientController.findByName)
    server.delete('/patient/:id', patientController.deleteById)
    

    // *Gestion medecin*
    server.get('/medecin', medecinController.findAll);
    server.post('/medecin', medecinController.save)
    server.put('/medecin-update/:id',medecinController.findByIdAndUpdate)
    server.get('/medecin/:name', medecinController.findByName)
    server.delete('/medecin/:id', medecinController.deleteById)

    // *Gestion des rendez-vous*
    // server.get('/medecin/date', rdvController.findAll);
    // server.post('/medecin/date', rdvController.save)
    // server.get('/medecin/:date', rdvController.findByDate)
    // server.delete('/medecin/date/:year:month:week:day:hour', rdvController.findByDate)


}