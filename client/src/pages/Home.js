import React, {Component} from 'react';
import {Input, SubmitBtn} from '../components/Form';
import Wrapper from '../components/Wrapper';
import API from "../utils/API";

export default class Home extends Component {
    state = {
        terms: ``,
        bookResults: []
    }
    handleInputChange = event =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event =>{
        event.preventDefault();
        console.log(this.state.terms)
        API.getBooks(this.state.terms)
        .then((re)=>{
            console.log(re);
        })

    }
    queryBooks = event =>{

    }
    render(){
        return(
            <Wrapper parentState = {this.props.parentState}>
                <h1>this will be the home page with a searchbar</h1>
                <Input 
                    value={this.state.terms}
                    onChange={this.handleInputChange}
                    name="terms"
                    placeholder="Search for books"
                />
                <SubmitBtn 
                    disabled={!(this.state.terms)}
                    onClick={this.handleFormSubmit}
                />
                

            </Wrapper>
        )
    }
}