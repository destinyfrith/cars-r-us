import { getOrders } from "./database.js";
import { getInterior } from "./database.js";
import { getPaintColor } from "./database.js";
import { getTechnology } from "./database.js";
import { getWheels } from "./database.js";

const buildOrderListItem = (order) => {
    const interiors = getInterior()
    const paints = getPaintColor()
    const technologies = getTechnology()
    const wheels = getWheels()

    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTechnologies = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    // add all prices together to get the total cost
    // assign the total price string to a new variable to be used below
    const totalCost = foundPaint.price + foundInterior.price + foundTechnologies.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}