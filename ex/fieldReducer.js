const INITIAL_STATE = { value: 'Opa' };

// Caso queira(não recomendado) alterar o estado: state.value = action.payload

// o Reducer recebe dois parâmetros, primeiro o estado e depois a action
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            // Dessa forma, não estou alterando o estado atual, sim evoluindo-o
            return { value: action.payload }
        default:
            return state;
    }    
}
