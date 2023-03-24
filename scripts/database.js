const database = {
    transientState: {
        object1: {}
    },
    purchases: [{
        id: 1,
        colonyId: 1,
        mineralId: 1,
        quantity: 2
    },
    {
        id: 2,
        colonyId: 1,
        mineralId: 3,
        quantity: 5
    }
],
    colonies: [
        {id: 1, name: "Terresan"},
        {id: 2, name: "Adarlan"},
        {id: 3, name: "Morath"}
    ],
    governors: [
        {id: 1, name: "Aelin Galathynius", colonyId: 1, active: true},
        {id: 2, name: "Dorian Havilliard", colonyId: 2, active: true},
        {id: 3, name: "Rowan Whitethorn", colonyId: 1, active: true},
        {id: 4, name: "Erawan", colonyId: 3, active: true}
    ],
    facilities: [
        {id: 1, name: "Endovier", active: true},
        {id: 2, name: "Rifthold", active: true},
        {id: 3, name: "Erilea", active: true}
    ],
    minerals: [
        {id: 1, type: "Copper", quantity: 50},
        {id: 2, type: "Salt", quantity: 120},
        {id: 3, type: "Gold", quantity: 60},
        {id: 4, type: "Iron Ore", quantity: 150}
    ],
    availableMinerals: [
        {id: 1, facilityId: 1, mineralId: 1, quantity: 20},
        {id: 2, facilityId: 1, mineralId: 2, quantity: 70},
        {id: 3, facilityId: 2, mineralId: 2, quantity: 50},
        {id: 4, facilityId: 2, mineralId: 3, quantity: 30},
        {id: 5, facilityId: 3, mineralId: 3, quantity: 30},
        {id: 6, facilityId: 3, mineralId: 4, quantity: 150},
        {id: 7, facilityId: 3, mineralId: 1, quantity: 30}
    ]
}


export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}
export const getGovernors = () => {
    return database.governors.map(g => ({...g}))
}
export const getMinerals = () => {
    return database.minerals.map(m => ({...m}))
}
export const getColonies = () => {
    return database.colonies.map(c => ({...c}))
}
export const getPurchases = () => {
    return database.purchases.map(p => ({...p}))
}
export const getAvailableMinerals = () => {
    return database.availableMinerals.map(aM => ({...aM}))
}
export const getTransientState = () => {
    return database.transientState
    
}
// export const getSelectedMineral = () => {
//     return database.transientState.selectedMineral
// }

// export const getSelectedGovernor = () => {
//     return database.transientState.selectedGovernor
// }

// export const getSelectedFacility = () => {
//     return database.transientState.selectedFacility
// }



export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setGovernor = (GovernorId) => {
    database.transientState.selectedGovernor = GovernorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setMineral = (MineralId) => {
    database.transientState.selectedMineral = MineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setPurchaseMineral = (MineralId) => {
    database.transientState.object1.mineralId = MineralId
}

export const setPurchaseQuantity = (Quantity) => {
    database.transientState.object1.quantity = Quantity
}

export const setPurchaseColony = (ColonyId) => {
    database.transientState.object1.colonyId = ColonyId
}

export const incrementDecrement = () => {
    
}
export const purchaseMineral = () => {
    //if there is a selected governor, facility and mineral    
    if (database.transientState.selectedMineral && database.transientState.selectedGovernor && database.transientState.selectedFacility) {


        const currentTransientState = getTransientState()
        setPurchaseColony()    

        const newPurchase = {...database.transientState.object1}

        const lastIndex = database.purchases.length - 1
        newPurchase.id = database.purchases[lastIndex].id +1

        database.purchases.push(newPurchase)

        database.transientState = {}

        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}



