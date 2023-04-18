export default function mainActions(state, action) {
  // type = string que vamos passar identificando a ação
  // state = valor do contexto
  // todos os componentes que estao abaixo do provider e que usam esse contexto serao renderizados novamente
  switch(action.type) {
    case 'SET_CONTACT_FORM_NAME':
      return {
        ...state,
        forms: {
          ...state.forms,
          contact: {
            ...state.forms.contact,
            name: action.payload,
          }
        }
      }
      case 'SET_CONTACT_FORM_EMAIL':
        return {
          ...state,
          forms: {
            ...state.forms,
            contact: {
              ...state.forms.contact,
              email: action.payload,
            }
          }
        }
      default:
        return state;
  }
}