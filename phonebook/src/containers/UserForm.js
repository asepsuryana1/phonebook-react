import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions'

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: "",
      nama: "",
      phone: ""
    }

    this.handleidChange = this.handleidChange.bind(this);
    this.handlenamaChange = this.handlenamaChange.bind(this);
    this.handlephoneChange = this.handlephoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleidChange(event){
    this.setState({id: event.target.value});
  }

  handlenamaChange(event){
    this.setState({nama: event.target.value});
  }

  handlephoneChange(event){
    this.setState({phone: event.target.value});
  }

  handleSubmit(event){
    if(this.state.id && this.state.nama && this.state.phone){
      this.props.postUser(this.state.id, this.state.nama, this.state.phone)
      this.setState({id: "", nama: "", phone: ""});
    }
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="id" className="col-sm-2 col-form-label">id</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="id" name="id" value={this.state.id} onChange={this.handleidChange} placeholder="id" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="nama" className="col-sm-2 col-form-label">nama</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nama" name="nama" value={this.state.nama} onChange={this.handlenamaChange} placeholder="nama"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handlephoneChange} placeholder="phone"/>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Tambah</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postUser: (id, nama, phone) => dispatch(postUser(id, nama, phone))
})

export default connect(
  null,
  mapDispatchToProps
)(UserForm)