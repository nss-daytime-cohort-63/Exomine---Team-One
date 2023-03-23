import { getMinerals, getFacilities, getTransientState, getAvailableMinerals, setMineral } from "./database.js";

const minerals = getMinerals()
const facilities = getFacilities()
const transientState = getTransientState()
const availableMinerals = getAvailableMinerals()

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.name === "mineralSelect") {
            setMineral(parseInt(clickEvent.target.value))


        }
    }
)

export const AvailableMinerals = () => {
    let html = `<section id = "availableMinerals">`
    html += `<ul>`

    if (transientState.selectedFacility === undefined) {
        html += `<h2>Facility Minerals</h2>`
    }
    else {
        for (let facility of facilities) {
            if (transientState.selectedFacility === facility.id) {
                html += `<h2>${facility.name}'s Minerals</h2>`
                for (let availableMineral of availableMinerals) {
                    if (availableMineral.facilityId === facility.id) {
                        for (let mineral of minerals) {
                            if (mineral.id === availableMineral.mineralId) {
                                html += `<li class="mineralList"><input type="radio" name="mineralSelect" value="${mineral.id}"/>${mineral.quantity} tons of ${mineral.type}</li>`
                            }

                        }
                    }
                }
            }
        }
    }
    html += `</ul></section>`
    return html
}