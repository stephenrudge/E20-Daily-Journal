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
