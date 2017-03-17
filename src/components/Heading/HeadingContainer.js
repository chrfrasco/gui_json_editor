import React from 'react';
import FileSaver from '../FileSaver/FileSaver';
import FileLoader from '../FileLoader/FileLoader';
import SearchBox from '../SearchBox/SearchBox';

const DropDown = ({handleClearChanges, handleFileLoaded, people}) => (
  <div className="drop-down btn">
    Actions ▾
    <div className="drop-down__content">
      <div className="line">
        <FileLoader handleFileLoaded={handleFileLoaded} msg="Load from file" />
      </div>

      <div className="line">
        <button className="btn danger" onClick={handleClearChanges}>
          Discard all changes
        </button>
      </div>

      <div className="line">
        <FileSaver people={people} />
      </div>
    </div>
  </div>
);

const HeadingContainer = (
  {handleInputChange, handleClearChanges, handleFileLoaded, people}
) => (
  <div className="heading">
    <h1>JSON Editor</h1>
    <div className="heading__inputs">
      <SearchBox handleInputChange={handleInputChange} />
      <DropDown
        handleFileLoaded={handleFileLoaded}
        handleClearChanges={handleClearChanges}
        people={people}
      />
    </div>
  </div>
);

export default HeadingContainer;
