import React, {Component} from 'react'


export default class PhoneForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
      
      nama: "",
      phone: "",
      value: ''};
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
      this.setState({ nama: event.target.value });
  }

  handlePhoneChange(event) {
      this.setState({ phone: event.target.value });
  }

  
  
  
    handleSubmit(event) {
      const id = Date.now();
      this.props.addPhone({ id, nama: this.state.nama, phone: this.state.phone, })
      this.setState({id: "", nama: "", phone: "" })
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama:
            <input type="text" value={this.state.nama} onChange={this.handleNameChange} />
          </label>
          <label>
            Phone:
            <input type="number" value={this.state.phone} onChange={this.handlePhoneChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }