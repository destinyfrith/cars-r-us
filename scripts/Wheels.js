import { getWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const CarWheels = () => {

    let html = `
    <select id="wheel">
        <option value="0">Choose your wheel here</option>
        `

    // Use .map() for converting objects to <li> elements
    const listItemsArray = wheels.map(
        (wheel) => {
            return `
        <option value="${wheel.id}"> ${wheel.color}</option>
        `
        }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += `</select>`
    return html

}