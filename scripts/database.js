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
    customerOrders: [
        {
            id: 1,
            paintColorId: 4,
            interiorId: 1,
            technologyId: 4,
            wheelsId: 2
        }
    ],
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