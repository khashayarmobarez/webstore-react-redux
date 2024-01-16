const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}

// on build level...
const sumItems = items => {
    const count = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemCounter: count, total: total}
}

const cartReducer = (state=initialState,action) => {
    switch(action.type) {
        // adding an item
        case 'ADD-ITEM':
            if(!state.selectedItems.find(item => item.id === action.payload.id )) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }
            // removing an item
        case 'REMOVE-ITEM': 
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            };
        case 'INCREASE': 
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'DECREASE': 
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case 'CHECK-OUT': 
            return{
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }

        case 'CLEAR': 
            return{
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }

        default:
              return state ;
     }
}

export default cartReducer