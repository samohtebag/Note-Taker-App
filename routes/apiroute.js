// loading data

const { v4 : uuid } = require('uuid');

const fs = require('fs');

// routing our API

module.exports = (app) => {

   let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8')); 

   app.get('/api/notes', (req, res) => res.json(notes));

   app.post('/api/notes', (req, res) => {

       let idNote = uuid();

       let notesTwo = req.body;

       notesTwo.idNote = idNote;

       notes.push(notesTwo);

       fs.writeFile('./db/db.json', JSON.stringify(notes), () => {

       });

       res.json(notes.slice(-1));

   });

   // for deleting notes

   app.delete('/api/notes:idNote', (req, res) => {

        notes = notes.filter((note) => {

            return note.idNote != req.params.idNote
        });

        fs.writeFile('./db/db.json', JSON.stringify(notes), () => {

            res.json(notes);

        });

   });

};
