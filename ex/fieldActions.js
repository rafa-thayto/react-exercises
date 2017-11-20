export function changeValue(e) {
    console.log('changeValue');
    return {
        // type é essencial
        type: 'VALUE_CHANGED',
        // É o dado que vem junto da ação
        payload: e.target.value
    }
}
