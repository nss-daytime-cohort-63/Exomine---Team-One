import { getColonies, getGovernors, getTransientState } from "./database.js"

const colonies = getColonies()
const governors = getGovernors()
const transientState = getTransientState()

export const Colonies = () => {
    let html = `<section id="colony">`

    
    //check if theres a selected governor, if so:
    if (transientState.selectedGovernor === undefined) {
        html += `<h2>Colony Minerals</h2>`
        
    }
    else {
        for (let governor of governors) {
            if (transientState.selectedGovernor === governor.id) {
                for (let colony of colonies) {
                    if (governor.colonyId === colony.id) {
                        html += `<h2>${colony.name} Minerals</h2>`
                    }
                }
            }
        }
    }
    //iterate thru governors to find the matching governor.
    //then iterate thru the colony to find the matching colonyId
    
    html += `</section>`
    
    return html

}