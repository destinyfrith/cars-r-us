import { getTechnology, setTechnology } from "./database.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const CarTechnology = () => {

    let html =

        `<select id="technology">
        <option value="0">Choose your tech here</option>`

    // Use .map() for converting objects to <li> elements
    const listItemsArray = technologies.map(
        (technology) => {
            return `
        <option value="${technology.id}"> ${technology.package}</option>
        `
        }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += `</select>`
    return html

}