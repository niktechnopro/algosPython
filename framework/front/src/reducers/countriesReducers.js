export function addCountry(state={}, action) {
	console.log(action);
    switch (action.type) {
        case 'ADD_COUNTRY':
            return action.payload;
        default:
            return state;
    }
}

export function deleteCountry(state={}, action) {
	console.log(action);
    switch (action.type) {
        case 'DELETE_COUNTRY':
            return action.payload;
        default:
            return state;
    }
}
