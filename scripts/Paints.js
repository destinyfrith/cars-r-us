import { getPaintColor } from "./database.js"

const colors = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
        if (changeEvent.target.id === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const CarColors = () => {

    let html = `
    <select id="color">
        <option value="0">Choose your color here</option>
        `

    // Use .map() for converting objects to <li> elements
    const listItemsArray = colors.map(
        (color) => {
            return `
        <option value="${color.id}"> ${color.color}</option>
        `
        }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += `</select>`
    return html

}