import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';

export default class Home extends Component {
    state = {
        user: ``,
        userId: ``
    }
    render(){
        return(
            <Wrapper parentState = {this.props.parentState}>
                <h1>this will be the home page with a searchbar</h1>

            </Wrapper>
        )
    }
}