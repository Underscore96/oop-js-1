class Storage{

    constructor(){
    }

    saveData(data){

        const dataString = JSON.stringify(data);
        
        localStorage.setItem('publications', dataString);
    }

    loadData(){
        const dataString = localStorage.getItem('publications')

        if (dataString) {
            const data = JSON.parse(dataString);
            return data;
            
        }

        return null;
    }
}