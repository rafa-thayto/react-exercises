export function changeValue(e) {
    return {
        // type é essencial
        type: 'VALUE_CHANGED',
        // É o dado que vem junto da ação
        payload: e.target.value
    }
}
