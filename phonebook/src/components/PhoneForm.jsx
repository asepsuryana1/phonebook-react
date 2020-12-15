import React, { Component } from 'react'


export default class PhoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      nama: "",
      phone: "",
      value: ''
    };
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
    this.setState({ id: "", nama: "", phone: "" })
    event.preventDefault();
  }
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input type="text" value={this.state.nama} onChange={this.handleNameChange} className="form-control" placeholder="Nama" required />
            </div>
            <div className="col-4">
              <input type="number" value={this.state.phone} onChange={this.handlePhoneChange} className="form-control" placeholder="No.Telp" required />
            </div>
           
              <button className="btn btn-secondary mr-2"  type="submit" value="Submit" > <i className="fas fa-save"></i> Simpan</button>
            
          </div>
        </form>
      </div >
    );
  }
}
//<input type="text" name="Name" value={this.state.Name} onChange={this.handleNameChange} />