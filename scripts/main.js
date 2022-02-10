// invoke the function that will display the HTML
import { CarsRUs } from "./CarsRUs.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()

// When state changes for your application, you need to regenerate the HTML to display the new state to the user.
// message that shows when a new order is created
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})