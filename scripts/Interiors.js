import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

// click event for anytime someone selects a new interior choice
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

// function needed in every module that you invoke in CarsRUs module to display selection lists
export const CarInterior = () => {

    let html = 

        `<select id="interior">
        <option value="0">Choose your interior here</option>
        `

    // Use .map() for converting objects to <li> elements
    // The map() array method is a conversion tool. It generates a new array with as many items as are in the 
    // original array, but in the new array, it puts items in the form that you specify.
    // So an object comes into your function, and a string gets returned. That string goes into a new array.
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

