import store from 'store';
import io from 'socket.io-client';

const socket = io();

chooseColor(window.localStorage.getItem('color'));
chooseFont(window.localStorage.getItem('font'));

socket.on('add:message', function(message){
  store.dispatch({
    type: 'ADD_MESSAGE',
    message: message
  });
})

export function addMessage(message) {
  let currentStore = store.getState();

  let messageObj = Object.assign({}, message);

  messageObj.username = currentStore.userReducer.username;
  messageObj.contentColor = currentStore.userReducer.color;
  messageObj.contentFont = currentStore.userReducer.font;

  socket.emit('add:message', messageObj);
  store.dispatch({
    type: 'ADD_MESSAGE',
    message: messageObj
  });
}

export function login(username) {
  if (username) {
    store.dispatch({
      type: 'ADD_USERNAME',
      username: username
    });
  }
}

export function chooseColor(color) {
  store.dispatch({
    type: 'CHANGE_COLOR',
    color: color
  })
  window.localStorage.setItem('color', color);
}

export function chooseFont(font) {
  store.dispatch({
    type: 'CHANGE_FONT',
    font: font
  })
  window.localStorage.setItem('font', font);
}
