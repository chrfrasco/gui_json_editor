import React, { Component } from 'react';
import fs from 'fs';

class FileLoader extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._loadFile = this._loadFile.bind(this);
    this._promptUserForFile = this._promptUserForFile.bind(this);
  }

  render() {
    return (
      <button
        className="btn"
        onClick={this._handleClick}
      >
        {this.props.msg}
      </button>
    );
  }

  _handleClick() {
    const obj = this._loadFile();
    this.props.handleFileLoaded(obj);
  }

  _loadFile() {
    const [path] = this._promptUserForFile();
    const fileString = fs.readFileSync(path, 'utf8');
    const objectFromFile = JSON.parse(fileString);

    return objectFromFile;
  }

  _promptUserForFile() {
    const dialog = require('electron').remote.dialog;
    const config = {
      properties: ['openFile'],
      filters: [{ name: 'JSON', extensions: ['json', 'JSON'] }]
    };

    return dialog.showOpenDialog(config);
  }
}

export default FileLoader;
