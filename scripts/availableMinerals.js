import { getMinerals, getFacilities, getTransientState, getAvailableMinerals } from "./database.js";

const minerals = getMinerals()
const facilities = getFacilities()
const transientState = getTransientState()
const availableMinerals = getAvailableMinerals()

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
                                html += `<li>${mineral.quantity} tons of ${mineral.type}</li>`
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