import { getFacilities, setFacility } from "./database.js";


export const facilities = () => {
    const facilities = getFacilities()
    // make buttons of the facilities
    for (facility of facilities) {
        let html = ""
        html += `<select id = "facility"><button id="facilityButton">${facility.name}</button></select>`
    }

  return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            setFacility(parseInt(event.target.value))        }
    }
)