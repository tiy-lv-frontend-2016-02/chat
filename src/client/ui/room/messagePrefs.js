import React from 'react';
import { chooseColor, chooseFont } from 'actions/actions';

export default React.createClass({
  _chooseColor: function (e) {
    chooseColor(e.target.value);
  },
  _chooseFont: function (e) {
    chooseFont(e.target.value);
  },
  render: function () {
    return (
      <div id="messagePrefs">
        <label htmlFor="contentColorPref">Choose a color</label>
        <input onChange={this._chooseColor} type="color" id="contentColorPref" />
        <label htmlFor="contentFontPref">Choose a font</label>
        <select onChange={this._chooseFont} id="contentFontPref">
          <option value="sans-serif">Default</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>
    )
  }
})
