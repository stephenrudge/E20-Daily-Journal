import {getEntries} from './entries.js'

const displayJournalEntries = () =>{
    const journalEntries = getEntries()
    
    let html = "";

    for(let i = 0; i <journalEntries.length; i++){
    html+= `
    <div class= "journalEntry">
    <p>Date: ${journalEntries[i].dateOfEntry}</p>
    <p>Type of travel: ${journalEntries[i].conceptsCovered}</p>
    <p>Journal Entry: ${journalEntries[i].journalEntry}</p>
    <p>Mood of the Day: ${journalEntries[i].moodForTheDay}</p>
    </div>`
    }
    document.getElementById("entries").innerHTML= html 
}
displayJournalEntries()