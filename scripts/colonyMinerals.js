import { getColonies, getFacilities, getGovernors, getMinerals, getPurchases, getTransientState } from "./database.js";



const buildColonyMinerals = (purchase) => {
    const minerals = getMinerals()
    const colonies = getColonies()
    const transientState = getTransientState()
    const governors = getGovernors()
    const purchases = getPurchases()
    let html = ""

    if (transientState.selectedGovernor === undefined) {
        return html
    } else {
        for (let governor of governors) {
            if (transientState.selectedGovernor === governor.id) {
                for (let colony of colonies) {
                    if (colony.id === governor.colonyId) {
                        for (let purchase of purchases) {
                            if (colony.id === purchase.colonyId) {
                                for (let mineral of minerals) {
                                    if (mineral.id === purchase.mineralId){
                                    html += `<li>${purchase.quantity} tons of ${mineral.type}</li>`
                                    } 
                                }
                            } else {
                                return html
                            }
                        }
                    }
                }
            }
        }
        return html
    }
}


export const selectedMineral = () => {
    const purchases = getPurchases()
    let html = '<ul>'
    const listitems = buildColonyMinerals()

    html += listitems
    html += "</ul>"

    return html
}
