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
<article class="mainContent">
    <article class="governor_colony">
        <section class="sectionsTwo">
            ${Governors()}
        </section>
        <section class="sections">
            ${Colonies()}
            ${selectedMineral()}
        </section>
    </article>
    <article class="facilities">
        <section class="sectionsTwo">
            ${facilities()}
        </section>
        <section class="sections">
            ${AvailableMinerals()}
        </section>
    </article>
    <article class="availableMinerals_purchases">
        <section class="sectionsTwo">
            ${PurchaseCart()}
            <button class="button" id="submitPurchase">Purchase Mineral</button>
        </section>
    </article>
</article>
    `
}