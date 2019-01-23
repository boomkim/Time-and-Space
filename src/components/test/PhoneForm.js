import React, { Component } from 'react';

class PhoneForm extends Component {
    id = 2 
    state = {
        name: '',
        phone: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
    }
    render() {
        return(
            <form>
                <input 
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit" onClick={this.handleSubmit}>등록</button>
            </form>
        )
    }
}

export default PhoneForm;
