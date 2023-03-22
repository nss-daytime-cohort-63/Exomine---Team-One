import { getGovernors, setGovernor, getCololonies } from "./database.js"

const governors = getGovernors()
const colonies = getCololonies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            const chosenOption = changeEvent.target.value
            setGovernor(parseInt(changeEvent.target.value))

            
            
            
        }
    }
)

export const Governors = () => {
    let html = "<h4>Choose a Governor</h4>"
    html += `<select id="governor">`
    html += `<option value="0">Choose a Governor...</option>`

    const listItems = governors.map(governor => {

        return `<option value="${governor.id}">${governor.name}</option>`
    })

html += listItems.join("")
html += "</select>"
return html
}



