import { Paints } from "./database"


// drop down menu using the html element <select>

<select id="resource">
    <option value="0">Prompt to select resource...</option>
    <option value="1">First option</option>
    <option value="2">Second option</option>
</select>

// To get the option that the user selected, 
// you would access the .value property of the <select> element, not the individual options.

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)