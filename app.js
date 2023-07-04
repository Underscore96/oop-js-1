console.log('HADOKEN');


//const book1 = {
//    title: 'Iliade',
//    author: 'Omero',                       //mettere l'autore come array può essere utile
//    dop: '27/12/2009',
//    publisher: 'Einaudi'
//}

//questo è un oggetto generico, ma noi faremo un oggetto più utile

const book2 = new Book('Odissea', 'Omero', '27/12/2010', 'Einaudi'); //questo è un oggetto di tipo libro che ha la classe Book


const book3 = new Book('La Divina Commedia', 'Dante Alighieri', '27/12/1988', 'Feltrinelli');



// console.log(book1);

// console.log(book2);

// //scriviamo una funzione che mi ritorni la scheda del libro

// function toString(book) {

//     const card = 'Titolo: ' + book.title + '\n' + 
//                  'Autore: ' + book.author + '\n' +
//                  'Data di pubblicazione: ' + book.dop + '\n' +
//                  'Casa editrice: ' + book.publisher + '\n';

//     return card;
// }

//questa funzione qui sopra che, dato un oggetto di partenza, lo printa come stringa, è toString ed esiste già in JS


//questo codice ha senso metterlo in app.js o in book.js? Forse è meglio in book. Qui l'ho commentato e copincollato lì

//console.log(getBookCard(book1));
//console.log(book2.getBookCard());                         //"book2" e "book3" qui stanno sostituendo il "this" che c'è nell'altro file
//console.log(book3.getBookCard());

console.log(book2 +'');

console.log(book3.getUpperTitle());


const magazine1 = new Magazine('Opera Oggi', '12/06/2023', 'Fabbri Editore', 23);

console.log(magazine1);

console.log(magazine1.toString());

console.log(magazine1.getUpperTitle());

const pub1 = new Publication('pubblicazione1', '20/7/1980', 'Fabbri Editore');

console.log(pub1.toString());

console.log(pub1.getUpperTitle());


const schoolbook1 = new Schoolbook('Storia storica', 'Ermanno Storioni', '31/12/3023', 'History Editions', 'Storia', 'Prima elementare');

console.log(schoolbook1.toString());

console.log(schoolbook1.getUpperTitle());


// const libraryCollection = [book2, book3, schoolbook1, magazine1];     //questo array non contiene elementi di tipo diverso, in verità. 
                                                                      //Perché hanno tutti un parente comune (Publication). Quindi è come se JS li leggesse tutti come delle publication. 
                                                                      //questa si chiama POLIMORFIA


// for (const pub of libraryCollection) {
//     console.log(pub.toString());
// }                                                                

//quando faccio il toString, ognuno fa il suo. Anche se prima erano tendenzialmente tutte publications

//mettiamo di voler cambiare le date e non gestirle più come delle stringhe, bensì come dei numeri. Siccome Publication li determina tutti, posso cambiare solo lui e a cascata cambia tutto


// const library1 = new Library([book2, book3, magazine1, schoolbook1]);

// library1.deletePublication(3);

// const book4 = new Book('se questo è un uomo', 'primo levi', '12/05/1992', 'adephi');

// library1.addPublication(book4);

// console.log(library1);

const gui = new GUI();

gui.start();



///JSON----------------------------------------------------------------------------------------------------------------

// const student1 = {
//     name: 'bryan',
//     yob: 1994,
//     isMarried: false
// }

// console.log(student1);

// const student1JSON = JSON.stringify(student1);

// console.log(student1JSON);

// const stringArray = ['qui', 'quo', 'qua'];

// const stringArrayJSON = JSON.stringify(stringArray);

// console.log(stringArrayJSON);


// const student2 = {
//     name: 'francesca',
//     yob: 1989,
//     isMarried: false
// }

// const studentArray = [student1, student2];

// const studentArrayJSON = JSON.stringify(studentArray);

// console.log(stringArrayJSON);

// console.log(student2);


// const jsonString ='[{ "name": "bryan", "yob": 1994, "isMarried": false }]';

// const studentArray = JSON.parse(jsonString);

// console.log(studentArray);
