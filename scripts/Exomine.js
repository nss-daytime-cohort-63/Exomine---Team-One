import { Governors } from "./Governors.js"
import { facilities } from "./Facilities.js"

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
            <h2>Eventual Colony Material</h2>
        </section>
    </article>
    <article class="availableMinerals_purchases">
        <section class="available_minerals">
            <h2>Eventual Available Facility Minerals</h2>
        </section>
        <section class="purchase">
            <h2>Eventual Purchase Cart</h2>
        </section>
    </article>
    `
}