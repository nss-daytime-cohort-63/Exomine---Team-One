import { getFacilities, setFacility, getTransientState } from "./database.js";


export const facilities = () => {
    const facilities = getFacilities()
    const transientState = getTransientState()
    let html = "<h4>Choose a Facility</h4>"
    html += `<select id="facility">`
    html += `<option value="0">Choose a Facility...</option>`

    const listItems = facilities.map(facility => {
        return `<option value="${facility.id}">${facility.name}</option>`
})



    html += listItems.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        // when a facility is clicked,setFacility should take the value of the facility selected
        if (event.target.id === "facility") {
            setFacility(parseInt(event.target.value))

        }
    }
)