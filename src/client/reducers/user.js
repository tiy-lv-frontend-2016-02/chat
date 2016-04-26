const userInitialState = {
  username: '',
  color: '#666666',
  font: 'sans-serif',
  users: []
}

export default function (state = userInitialState, action) {
  switch (action.type) {
    case 'ADD_USERNAME':
      return {...state, username:action.username};

    case 'CHANGE_COLOR':
      return {...state, color:action.color};

    case 'CHANGE_FONT':
      return {...state, font:action.font};

    case 'UPDATE_USER_LIST':
      return {...state, users: action.userList};

    default:
      return state;
  }
}
