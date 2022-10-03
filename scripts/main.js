import { getEntries, sendEntries, fetchEntries } from './entries.js'



const displayJournalEntries = async ()  =>{
    await fetchEntries()
    const journalEntries = getEntries()
    console.log(journalEntries)
    let html = "";

    for(let i = 0; i <journalEntries.length; i++){
    html+= `
    <div class= "journalEntry">
    <p>Date: ${journalEntries[i].dateOfEntry}</p>
    <p>Type of travel: ${journalEntries[i].typesOfTravel}</p>
    <p>Journal Entry: ${journalEntries[i].journalEntry}</p>
    <p>Mood of the Day: ${journalEntries[i].moodForTheDay}</p>
    </div>`
    }
    document.getElementById("entries").innerHTML= html 
}
displayJournalEntries()


document.addEventListener("click", (event) =>{
    if(event.target.id == "submitNewQuote"){
        // e.preventDefault()
        const dateOfEntry = document.querySelector("input[name=entryDate]")?.value;
        const typesOfTravel = document.getElementById('travelType')?.value;
        console.log(typesOfTravel)
        const journalEntry = document.getElementById('journalEntry')?.value;
        const moodForTheDay  = document.querySelector("select[name=cars]")?.value;

        
 let dateEntered = new Date(dateOfEntry)
dateEntered = dateEntered.toLocaleDateString()
 
const newQuote = {
            dateOfEntry: dateEntered,
            typesOfTravel: typesOfTravel,
            journalEntry: journalEntry,
            moodForTheDay: moodForTheDay,   
        }
              sendEntries(newQuote) 
    }
});

document.addEventListener("stateChanged", (event) => {
    displayJournalEntries();
  });
  