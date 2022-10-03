const applicationState = {
    entries: []
}

const API = "http://localhost:8088"

export const fetchEntries = async () => {
    const dataFetch = await fetch (`${API}/entries`)
    const serviceEntries= await dataFetch.json()
    applicationState.entries= serviceEntries
}



    export const getEntries = () => {
        return applicationState.entries.map(entries => ({...entries}))
        
    }
   
    export const sendEntries = async (avocado) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(avocado)
            
        }

        const response = await fetch (`${API}/entries`, fetchOptions)
        const responseJson = await response.json()
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }

    // const getNewEntryId = () => {
    //     let highestEntryId = journalEntries.sort((a, b) => b.id - a.id)[0].id
    //     return highestEntryId + 1
    // }
    
    // export const addNewEntry = (entry) => {
    //     fetch(`${API}/entries`)
        // document.dispatchEvent(new CustomEvent("stateChanged"))
    
    //   }
        // document.dispatchEvent(new CustomEvent("stateChanged"))