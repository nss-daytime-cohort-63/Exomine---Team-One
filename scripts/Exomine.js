import { Governors } from "./Governors.js"
import { facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { AvailableMinerals } from "./availableMinerals.js"
import { PurchaseCart } from "./Purchases.js"
import { purchaseMineral } from "./database.js"
import { selectedMineral } from "./colonyMinerals.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "submitPurchase") {
        purchaseMineral()
    }
})

export const Exomine = () => {
    return `
    <h1>Exomine Team One</h1>

    <article class="governor_facility_colony">
        <section class="governor_choices">
            ${Governors()}
            </section>
        <section class="facility_choices">
            ${facilities()}
        </section>
        <section class="colony_minerals">
            ${Colonies()}
        </section>
        <section class="colony_minerals">
            ${selectedMineral()}
        </section>
    </article>
    <article class="availableMinerals_purchases">
        <section class="available_minerals">
            ${AvailableMinerals()}
        </section>
        <section class="purchase">
            ${PurchaseCart()}
            <button class="button" id="submitPurchase">Purchase Mineral</button>
        </section>
    </article>
    `
}