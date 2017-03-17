import React, { Component } from 'react';
import fs from 'fs';
import path from 'path';

class FileSaver extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._writeFile = this._writeFile.bind(this);
    this._promptUserForFolder = this._promptUserForFolder.bind(this);
  }

  render() {
    return (
      <button
        className="btn success"
        onClick={this._handleClick}
      >
        Save all changes to file
      </button>
    );
  }

  _handleClick() {
    const cleanedArray = this.props.people
      .map(({ first, last, bio, id }) => 
        Object.assign({}, { first, last, bio, id })
      );
    const dataString = JSON.stringify(cleanedArray);
    this._writeFile(dataString);
  }

  _writeFile(dataString) {
    const [path] = this._promptUserForFolder();
    fs.writeFileSync(`${path}/people.json`, dataString)
  }

  _promptUserForFolder() {
    const dialog = require('electron').remote.dialog;
    const config = {
      properties: ['openDirectory']
    };

    return dialog.showOpenDialog(config);
  }
}

export default FileSaver;
