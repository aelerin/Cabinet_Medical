import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import fs from 'fs';
import { setRouting } from './routing';

const cheminLogs = './logs.txt';
const server = express();

mongoose.connect("mongodb://rsc137.fr:8082/medical", {
    poolSize: 10,
    authSource: "admin",
    user: "root",
    pass: "example",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'console.error'))
db.once('open', () => console.log("Mongo a démarré avec succès"));

server.use((req, res, next) => {
    let date = new Date();
    let chaine = `\n¨${date} - ${req.url} - ${req.method}`
    fs.appendFile(cheminLogs, chaine, (err) => {
        if (err) throw err;
        console.log('LOG ajouté');
    });
    next();
})

server.use(bodyParser.json());

setRouting(server);

server.listen(3333, () => console.log('Serveur up'));
