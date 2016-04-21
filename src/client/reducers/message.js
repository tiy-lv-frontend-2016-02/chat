/*
Message example:
messages: [
  {
    creator: 'username',
    creatorColor: '#666666',
    content: 'asdf',
    contentColor: '#666666'
  },
  {...}
]

new
{
  alias: 'username',
  content: content,
  contentColor: '#000000',
  contentFont: '#000000',
  timestamp: date(),
  aliasColor: #000000,
  avatar: url,
  background: #000000,
  font-size: 14px
}

 */

const messagesInitialState = {
  messages: []
}

export default function (state = messagesInitialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':

      let newState = Object.assign({}, state);

      newState.messages.push(action.message);
      console.log(action.message);
      return newState;

    default:
      return state;
  }
}
