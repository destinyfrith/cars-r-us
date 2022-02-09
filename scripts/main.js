// invoke the function that will display the HTML
import { CarsRUs } from "./CarsRUs";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()