import { getMinerals, getTransientState } from "./database.js"


const transientState = getTransientState()

const minerals = getMinerals()


export const PurchaseCart = () => {
    let html = `<section id="chosenMineral">`
    
    if (transientState.selectedMineral === undefined) {
        html += `<h2>Shopping Cart</h2>`
    }
    else {
       for (let mineral of minerals) {
        if (transientState.selectedMineral === mineral.id)
        html += `1 ton of ${mineral.type}`
       }
    }
    return html
}