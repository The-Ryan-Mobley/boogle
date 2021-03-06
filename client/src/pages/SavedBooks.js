import React, {Component} from 'react';
import Wrapper from '../components/Wrapper'
import API from '../utils/API';


export default class SavedBooks extends Component {
    state = {
        userBooks: []
    }
    componentDidMount() {
        API.getSavedBooks(this.props.parentState.userId).then(re => {
            let userBooks = re.data;
            let idList =[];
            let noDupes = [];
            userBooks.forEach(i => {
                if(idList.indexOf(i.bookId) === -1){
                    idList.push(i.bookId);
                    noDupes.push(i);
                }
            });
            this.setState({userBooks: noDupes});
        })
    }
    render(){
        return(
            <Wrapper parentState = {this.props.parentState}>
                <h1 className="bodyTitle"> Saved Books</h1>
                {this.state.userBooks.map(i =>(
                    <div className="twelve columns" key={i.bookId}>
                        <div className="bookInfo shadowed">
                            <h2 className="bookTitle">{i.title}</h2>
                            <a className="bookLine">{i.link}</a>
                            <img className="bookThumbnail" src={i.image} alt="thumb"/>
                            <p>{i.authors}</p>
                            <p>{i.summary}</p>
                        </div>
                    </div>
                ))}


            </Wrapper>
        )
    }
}