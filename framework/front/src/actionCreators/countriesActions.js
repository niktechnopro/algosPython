export function addCountry(value) {
    return {
        type: 'ADD_COUNTRY',
        payload: value
    };
}

export function deleteCountry(value) {
    return {
        type: 'DELETE_COUNTRY',
        payload: value
    };
}