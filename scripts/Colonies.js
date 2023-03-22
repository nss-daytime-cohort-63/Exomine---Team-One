import { getColonies, setColonies } from "./database.js"

const colonies = getColonies()

export const Colonies = () => {
    let html = `<section id="colony">`

    const listItems = colonies.map(colony => {
        
        return `<h2>Colony Minerals</h2></section>`

    })

}