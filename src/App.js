import React, { Component } from 'react';
import fs from 'fs';
import FileLoader from './components/FileLoader/FileLoader';
import FormContainer from './components/Form/FormContainer';
import HeadingContainer from './components/Heading/HeadingContainer';
import ListContainer from './components/List/ListContainer';
import ModalContainer from './components/Modal/ModalContainer';
import ModalBody from './components/Modal/ModalBody';

function savePeopleToFile() {
  const filename = path.join(__dirname, './src/data/people.json');
  const data = JSON.stringify(people);
  fs.writeFile(filename, data);
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      people: [],
      filterText: ''
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileLoaded = this.handleFileLoaded.bind(this);
    this.handleClearChanges = this.handleClearChanges.bind(this);
  }

  render() {
    const { filterText, people, person, open } = this.state;

    return (
      <div>
        <HeadingContainer
          handleFileLoaded={this.handleFileLoaded}
          handleInputChange={this.handleInputChange}
          handleClearChanges={this.handleClearChanges}
          people={people}
        />
        <ListContainer
          people={people}
          handleOpen={this.handleOpen}
          filterText={filterText}
        />

        {people.length === 0
          ? <div style={{ position: 'absolute', top: '6rem', left: '50%', transform: 'translatex(-50%)'}}>
              <FileLoader handleFileLoaded={this.handleFileLoaded} msg="Choose a file to load" />
            </div>
          : null}

        <ModalContainer open={open}>
          <ModalBody>
            <FormContainer handleClose={this.handleClose} person={person} />
          </ModalBody>
        </ModalContainer>
      </div>
    );
  }

  handleFileLoaded(obj) {
    this.originalData = obj;
    this.setState({ people: obj });
  }

  handleClearChanges() {
    this.setState({ people: this.originalData });
  }

  handleOpen(person) {
    this.setState({ person, open: true });
  }

  handleClose(newPerson) {
    if (typeof newPerson !== 'undefined') {
      this._updatePerson(newPerson);
    }

    this.setState({ person: null, open: false });
  }

  handleInputChange(value) {
    this.setState({ filterText: value });
  }

  _updatePerson(newPerson) {
    const people = this.state.people.map(person => {
      if (newPerson.id === person.id) {
        return Object.assign({}, newPerson, { edited: true });
      }
      return person;
    });

    this.setState({ people });
  }
}
