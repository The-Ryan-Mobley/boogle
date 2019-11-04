import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';

export default class Home extends Component {
    state = {
        user: ``,
        userId: ``
    }
    render(){
        return(
            <Wrapper>
                <h1>this is the homepage</h1>

            </Wrapper>
        )
    }
}