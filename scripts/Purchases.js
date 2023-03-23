import { AvailableMinerals } from "./availableMinerals.js"
import { getAvailableMinerals, getColonies, getFacilities, getGovernors, getMinerals, getTransientState } from "./database.js"

const colonies = getColonies()
const transientState = getTransientState()
const governors = getGovernors()
const facilities = getFacilities()
const availableMinerals = getAvailableMinerals()
const minerals = getMinerals()

document.addEventListener()

export const PurchaseCart = () => {
    let html = `<section id="chosenMineral">`
    
    if (transientState.selectedMineral === undefined) {
        html += `<h2>Shopping Cart</h2>`
    }
    else {
       for (let mineral of minerals) {
        if (transientState.selectedMineral === mineral.id)
        html += `${mineral.quantity} ton of ${mineral.type}`
       }
    }
    html += `<button class="button" id="submitPurchase">Purchase Mineral</button>`
    return html
}