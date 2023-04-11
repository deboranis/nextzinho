import mainActions from "./main.actions";

function combineReducers(...reducers) {
  // vai receber um array de reducers com suas actions
  return function reducer() {
    // vai loopar por todos os reducers chamando cada um com seus states e actions respectivos
    for(let i = 0; i < reducers; i++) {
      // state chamando cada função de action
      state = reducers[i](state, action)
    }
    return state;
  }
}

const initialContextState = {
  forms: {
    contact: {
      name: '',
      phone: '',
      email: '',
      message: '',
    }
  }
};

// dentro do Context existe um state; eu estou apontando esse state pro objeto que eu criei
const Context = React.createContext(initialContextState);

// o contexto encapsula tudo que está dentro dele. o children aqui é cada coisa dentro do contexto
const Provider = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(combineReducers(mainActions));
  // os valores que estão no contexto e serão passados pra baixo para serem acessados por outros componentes
  const value = { state, dispatch };
  // dispatch é a função do reducer que vai transportar o Action até o switch
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export {Context as MainContext, Provider as MainProvider}