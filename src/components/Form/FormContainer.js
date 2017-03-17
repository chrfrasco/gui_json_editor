import React, {Component} from 'react';

const Input = ({ label, handleInputChange, name, value }) => {
  const style = value.length >= 0
    ? { border: 'thin solid #eee' }
    : { border: 'thick solid red' };

  return (
    <div className="form__group">
      <label>{label}</label>
      <input style={style} name={name} type="text" placeholder={label} value={value} onChange={handleInputChange} />
    </div>
  );
}

const TextArea = ({ label, handleInputChange, name, value }) => (
  <div className="form__group">
    <label>{label}</label>
    <textarea name={name} type="text" placeholder={label} value={value} onChange={handleInputChange} />
  </div>
);

class FormContainer extends Component {
  constructor(props) {
    super(props);
    
    const { first, last, bio } = this.props.person;
    this.state = { first, last, bio, submittable: false };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { first, last, bio, submittable } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit} onReset={() => this.props.handleClose()}>
        <Input label="First name" name="first" value={first} handleInputChange={this.handleInputChange} />
        <Input label="Last name" name="last" value={last} handleInputChange={this.handleInputChange} />
        <TextArea label="Bio" name="bio" value={bio} handleInputChange={this.handleInputChange} />

        <div>
          <button className="btn danger" type="reset">Discard changes</button>
          <button className="btn success" disabled={!submittable} type="submit">Save changes</button>
        </div>
      </form>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const submittable = value.length > 0;

    this.setState({
      [name]: value,
      submittable
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if (this.state.submittable) {
      const id = this.props.person.id;
      const { first, last, bio } = this.state;
      const newPerson = { first, last, bio, id };

      this.props.handleClose(newPerson);
    } else {
      this.props.handleClose();
    }
  }
}

export default FormContainer;