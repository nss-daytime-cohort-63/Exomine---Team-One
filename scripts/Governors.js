import { getGovernors, setGovernor, getColonies } from "./database.js"

const governors = getGovernors()
const colonies = getColonies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            const chosenOption = changeEvent.target.value
            setGovernor(parseInt(changeEvent.target.value))


//get the governor object and can do this by getting to the id
//then once we have the object, then can access the governor id 
            
            
            
        }
    }
)

export const Governors = () => {
    let html = "<h4>Choose a Governor</h4>"
    html += `<select id="governor">`
    html += `<option selected value="0">Choose a Governor...</option>`
    //if theres a governor is transient state, put a select on whichever has the governor id, to make the name of the governor show up for the user.

    const listItems = governors.map(governor => {

        return `<option value="${governor.id}">${governor.name}</option>`
    })

html += listItems.join("")
html += "</select>"
return html
}



