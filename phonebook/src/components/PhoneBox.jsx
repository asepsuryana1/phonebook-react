import React, { Component } from 'react'
import PhoneList from './PhoneList'
import PhoneForm from './PhoneForm'
//import logo from './logo.svg';


export default class PhoneBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.addPhone = this.addPhone.bind(this);
        this.deletePhone = this.deletePhone.bind(this);
    }
    addPhone(Phone) {
        this.setState((state) => ({
            data: [...state.data, Phone]
        }));

    }
    deletePhone(id) {
        this.setState((state) => ({
            data: state.data.filter(item => item.id != id)
        }))
    }

    render() {
        return (
            <div>
                <div className="container card" >              
                    <div>
                        <PhoneList data={this.state.data} deletePhone={this.deletePhone} />
                        <PhoneForm addPhone={this.addPhone} />
                    </div>
                </div>
            </div>
        )
    }
}