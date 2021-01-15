import { patientController } from "./controller/PatientController";
import { medecinController } from "./controller/MedecinController";
import { rdvController } from "./controller/RdvController";
import { creneauController } from "./controller/CreneauController";


export const setRouting = (server: any) => {
    // *Gestion patient*
    server.get('/patients', patientController.findAll);
    server.get('/patients/:id', patientController.findById);
    server.get('/patient-name/:name', patientController.findByName);
    server.post('/patients', patientController.save);
    server.put('/patients/:id', patientController.findByIdAndUpdate);
    server.delete('/patients/:id', patientController.deleteById);


    // *Gestion medecin*
    server.get('/medecins', medecinController.findAll);
    server.get('/medecin-name/:name', medecinController.findByName);
    server.get('/medecin/:id', medecinController.findById);
    server.get('/medecin-specialite/:specialite', medecinController.findBySpecialty);
    server.post('/medecin', medecinController.save);
    server.put('/medecin/:id', medecinController.findByIdAndUpdate);
    server.delete('/medecin/:id', medecinController.deleteById);

    // *Gestion des rendez-vous*
    server.get('/rdvs', rdvController.findAll);
    server.get('/rdv/:id', rdvController.findById);
    server.get('/rdvs-date/:date', rdvController.findByDate);
    server.get('/rdv-CreneauDate/:idCreneau', rdvController.findByIdCreneauAndDate);
    server.post('/rdv', rdvController.save);
    server.put('/rdv/:id', rdvController.findByIdAndUpdate);
    server.delete('/rdv/:id', rdvController.deleteById);
    
    // *Gestion des routing*
    server.get('/creneaux', creneauController.findAll);
    server.get('/creneau/:id', creneauController.findById);
    server.post('/creneau', creneauController.save);
    server.put('/creneau/:id', creneauController.findByIdAndUpdate);
    server.delete('/creneau/:id', creneauController.deleteById);
}
