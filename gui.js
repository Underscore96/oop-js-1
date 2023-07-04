class GUI{

       constructor(){
        this.library = new Library();
        this.storage = new Storage();

        const data = this.storage.loadData();
        console.log(data);
        if (data) {
         this.library.fromDbObjects(data);
            
        }
      
       }

       start(){
           while (true) {
               const firstChoice = prompt(
                   "Hai 4 opzioni:\n" +
                       "1)Guarda la lista dei libri\n" +
                       "2)Aggiungi libro\n" +
                       "3)rimuovi libro\n" +
                       "4)Esci\n" +
                       "inserisci il numero"
               );
               if (firstChoice === "1") {
                this.showBooks()
               } else if (firstChoice === "2") {
                this.insertBook()
               } else if (firstChoice === "3") {
                this.deleteBook();
               } else if (firstChoice === "4") {
                break;
               } else {
                   alert("hai sbagliato ad inserire l'opzione");
               }
           }
       }
        
    
       insertBook(){
        const title = prompt('inserisci titolo');
        const author = prompt('Inserisci l\'autore');
        const dop = prompt('inserisci la data di pubblicazione nel formato gg/mm/aaaa');
        const publisher = prompt('inserisci il nome della casa editrice');
        
        const book = new Book(title, author, dop, publisher);
        this.library.addPublication(book);

        this.storage.saveData(this.library.publications);

        // console.log(this.library);
       }

       showBooks(){
        const allBooks = this.library.getAllBookCards();

        alert(allBooks);
       }

       deleteBook(){
        const humanIndex = prompt('Inserisci il numero del libro  da eliminare')
        const index = humanIndex -1;
        this.library.deletePublication(index);
        this.storage.saveData(this.library.publications);




       }
}