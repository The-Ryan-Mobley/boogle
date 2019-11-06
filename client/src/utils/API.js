import axios from "axios";

export default {
  // Gets all books
  getBooks: (terms)=> {
    return axios.get("/api/books/"+ terms);
  },
  // Gets the book with the given id
  getBook: (id)=> {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  getSavedBooks: (id)=> {
    return axios.get("/api/books/save/" + id);
  },
  // Saves a book to the database
  saveBook: (bookData)=> {
    return axios.post("/api/books/save", bookData);
  },
  newUser: (userInfo)=>{
      return axios.post("/api/user/new", userInfo);
  },
  login: (userInfo)=>{
      return axios.get("/api/user/login", {params: userInfo});
  }
};
