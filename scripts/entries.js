const journalEntries = [
    {
        id: 1,
        dateOfEntry: "07/20/2023",
        typesOfTravel: "Walking",
        journalEntry: "we embarked out to Oregon today, i am optomistic",
        moodForTheDay: "Happy"
    },
    
    {
        id: 2,
        dateOfEntry: "07/21/2023",
        typesOfTravel: "Just more walking",
        journalEntry: "Today we saw some bison. I shot it down so we could have some food. I hope it fits in the wagon.",
        moodForTheDay: "Excited"
        
    },
    {
        id: 3,
        dateOfEntry: "07/31/2023",
        typesOfTravel: "More of walking",
        journalEntry: "Sorry i haven't been writing the past couple days. Today was a bad day, we had to ford a river. That was harder than i thought, we lost some clothes, but we are not naked",
        moodForTheDay: "Sad"
    },
    {
        id: 4,
        dateOfEntry: "08/01/2025",
        typesOfTravel: "Walking again",
        journalEntry: "Well, hello again, today we are low on water. The river yesterday was not clean to drink, so hopefully there is something coming up soon.",
        moodForTheDay: "frustrated"
    },
    {
        id: 5,
        dateOfEntry: "08/03/2025",
        typesOfTravel: "So much walking",
        journalEntry: "Well, Johanna is feeling sick, she thinks it was the fish that we ate last night, i ate some too, but not feeling as sick. We'll see after tomorrow.",
        moodForTheDay: "sad"
    },
    {
        id: 6,
        dateOfEntry: "08/07/2025",
        typesOfTravel: "wagon riding",
        journalEntry: "It was my turn to ride in the wagon",
        moodForTheDay: "Happy"
    },
    
    {
        id: 7,
        dateOfEntry: "08/10/2025",
        typesOfTravel: "Walking again and again",
        journalEntry: "Well, now i am feeling sick. short entry",
        moodForTheDay: "Happy"
    },
    {
        id: 8,
        dateOfEntry: "08/12/2025",
        typesOfTravel: "Riding in Wagon",
        journalEntry: "Today we had no food for a couple of days until the evening when Joseph shot a wild bison. #eatingGoodTonight!",
        moodForTheDay: "Happy"
    },
    {
        id: 9,
        dateOfEntry: "08/15/2025",
        typesOfTravel: "Riding in Wagon",
        journalEntry: "Today what a day. We met some people along the way. I took a likin' to this girl i met. I got her address, so next fort we come to, I will write her a letter",
        moodForTheDay: "Happy"
    },
    ]

    export const getEntries = () => {
        const entries = journalEntries.map(entries => ({...entries}))
        return entries
    }

    const getNewEntryId = () => {
        let highestEntryId = journalEntries.sort((a, b) => b.id - a.id)[0].id
        return highestEntryId + 1
    }
    
    export const addNewEntry = (entry) => {
        let newId = getNewEntryId()
        entry.id = newId
        journalEntries.unshift(entry)
        document.dispatchEvent(new CustomEvent("stateChanged"))
    
      }
        // document.dispatchEvent(new CustomEvent("stateChanged"))
    