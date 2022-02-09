import { getInterior } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const CarInterior = () => {

    let html = `
    <select id="interior">
        <option value="0">Choose your interior here</option>
        `

    // Use .map() for converting objects to <li> elements
    const listItemsArray = interiors.map(
        (interior) => {
            return `
        <option value="${interior.id}"> ${interior.color}</option>
        `
        }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += `</select>`
    return html

}

