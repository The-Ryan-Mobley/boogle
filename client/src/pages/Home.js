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
            if(re.data){
                console.log(re);
                let bookResults = [];
                re.data.forEach(i => {
                    console.log("tick");
                    let imageInfo = "";
                    i.volumeInfo.imageLinks ? imageInfo = i.volumeInfo.imageLinks.thumbnail 
                    : imageInfo = "no image"
                    let obj = {
                        authors: i.volumeInfo.authors,
                        summary: i.volumeInfo.description,
                        image: imageInfo,
                        link: i.volumeInfo.canonicalVolumeLink,
                        title: i.volumeInfo.title,
                        id: i.id
                    }
                bookResults.push(obj);
            });
            this.setState({bookResults});
            }
            else {
                this.setState({bookResults: "Failed to find results"});
            }
        });
    }
    saveBook = (event) =>{
        const { name, value } = event.target;
        let bookArr = this.state.bookResults.filter(i => i.id === value);
        let bookData = {
            authors: bookArr[0].authors.join(),
            summary: bookArr[0].summary,
            image: bookArr[0].image,
            link: bookArr[0].link,
            title: bookArr[0].title,
            bookId: bookArr[0].id,
            userId: this.props.parentState.userId
        }
        console.table(bookData);
        API.saveBook(bookData).then(re =>{
            console.log(re)

        });


    }
    queryBooks = event =>{
        

    }
    render(){
        return(
            <Wrapper parentState = {this.props.parentState}>
                <div className="row">
                    <div className="twelve columns searchInfo">
                    <h1 className="bodyTitle">Search for books below!</h1>
                        <Input 
                            value={this.state.terms}
                            onChange={this.handleInputChange}
                            name="terms"
                            placeholder="Search for books"
                        />
                        <SubmitBtn 
                            disabled={!(this.state.terms)}
                            onClick={this.handleFormSubmit}
                        >
                        Search!
                        </SubmitBtn>
                </div>
                </div>
                <div className="row">
                    {this.state.bookResults.map(i =>(
                        <div className="twelve columns" key={i.id}>
                            <div className="bookInfo shadowed">
                            {this.props.parentState.userId.length ? 
                                (<button value={i.id} onClick={this.saveBook} className="button sav">💾</button>) 
                                : (<p className="sav">login to save</p>)}
                                <h2 className="bookTitle">{i.title}</h2>
                                <a className="bookLine" href={i.link}><strong>Link</strong></a>
                                <img className="bookThumbnail" src={i.image} alt="thumb"/>
                                <p className="bookAuthors"><strong>Authors: </strong>{i.authors}</p>
                                <p className="bookSummary">{i.summary}</p>

                            </div>
                        </div>
                    ))}
                </div>
                

            </Wrapper>
        )
    }
}