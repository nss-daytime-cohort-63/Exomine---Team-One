import { Governors } from "./Governors.js"
import { facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { AvailableMinerals } from "./availableMinerals.js"
import { PurchaseCart } from "./Purchases.js"

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
    </article>
    <article class="availableMinerals_purchases">
        <section class="available_minerals">
            ${AvailableMinerals()}
        </section>
        <section class="purchase">
            ${PurchaseCart()}
        </section>
    </article>
    `
}