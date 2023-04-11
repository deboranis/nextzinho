export default function mainActions(state, action) {
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
      default:
        return state;
  }
}