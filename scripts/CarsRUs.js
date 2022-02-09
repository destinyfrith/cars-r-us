// import all modules containing option groups o they can be used in this module
import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"

// interpolate the modules in the appropriate places in the overall HTML structure

// export and definea function for this HTML structure so that it can be invoked in main
export const CarsRUs = () => {
    return `
    <h1> Cars-R-Us</h1>

    <article class="choices">
        <section class="choices_interiors options">
          <h2>Interior</h2>
      ${Interior()}
    </section>
    <section class="choices_paints options">
        <h2>Paints</h2>
        ${Paints()}
    </section>
        <section class="choices_technologies options">
          <h2>Technologies</h2>
        ${Technologies()}
    </section>
        <section class="choices_wheels options">
            <h2>Wheels</h2>
        ${Wheels()}
    </section>
    </article>
    `
}