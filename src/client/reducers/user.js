const userInitialState = {
  username: '',
  color: '#666666',
  font: 'sans-serif'
}

export default function (state = userInitialState, action) {
  switch (action.type) {
    case 'ADD_USERNAME':
      return {...state, username:action.username};

    case 'CHANGE_COLOR':
      return {...state, color:action.color};

    case 'CHANGE_FONT':
      return {...state, font:action.font};

    default:
      return state;
  }
}
