// four different sets of options for building the car 
// this module contains all of the data,or state, for the application

const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 140 },
        { id: 3, color: "Firebrick Red", price: 180 },
        { id: 4, color: "Spring Green", price: 200 }
    ],
    interior: [
        { id: 1, type: "Fabric", color: "Beige", price: 220 },
        { id: 2, type: "Fabric", color: "Charcoal", price: 250 },
        { id: 3, type: "Leather", color: "white", price: 310 },
        { id: 4, type: "Leather", color: "Black", price: 330 }
    ],
    technology: [
        { id: 1, package: "Basic", price: 129 },
        { id: 2, package: "Navigation Package", price: 237 },
        { id: 3, package: "Visibility Package", price: 310 },
        { id: 4, package: "Ultra Package", price: 442 }
    ],
    wheels: [
        { id: 1, size: 17, color: "None", type: "Radial", price: 250 },
        { id: 2, size: 17, color: "Black", type: "Radial", price: 290 },
        { id: 3, size: 18, color: "Silver", type: "Spoke", price: 320 },
        { id: 4, size: 18, color: "Black", type: "Spoke", price: 405 }
    ],
    customOrders: [
        {
            id: 1,
            paintColorId: 4,
            interiorId: 1,
            technologyId: 4,
            wheelsId: 2,
            timestamp: 1614659931693
        }
    ],

    orderBuilder: {
    },
}

// write & export get/getter functions for each collection of customizations for other modules to use
export const getPaintColor = () => {
    return database.paintColor.map(color => ({ ...color }))
}

export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

// export custom orders data
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

// this is exporting the function setMetal so we can use it elsewhere
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
// putting a property on the order builder object
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
// This function's sole reponsiblity will be to take the temporary choices 
// currently being stored in the orderBuilder state object and make them permanent
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))

}