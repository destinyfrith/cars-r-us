import { getPaintColor, setColor } from "./database.js"

const colors = getPaintColor()

// add a change event listener that will set a new state for color
// Instead of showing an alert when a color is chosen, 
// you now need to set the corresponding property of the order builder object in application state.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)
// create a function that displays the html in a selection box
export const CarColors = () => {

    let html =

        `<select id="color">
        <option value="0">Choose your color here</option>
        `

    // Use .map() for converting objects of the colors array to <li> elements
    const listItemsArray = colors.map(
        (color) => {
            // each color id will print the color's name attributed to it
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