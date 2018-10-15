export function addCountry(value) {
    console.log('add country inside action', value);
    let objecttt = {
        type: 'ADD_COUNTRY',
        payload: value
    };
    console.log(objecttt)
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