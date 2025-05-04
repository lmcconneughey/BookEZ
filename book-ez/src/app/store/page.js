'use client'
import axios from "axios";
import BookList from "../ui/books/BookList.js";
import { useState, useEffect} from "react";

const BookListPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/books')
                console.log(response.data)
                setBooks(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])


    return(
        <div className="">
            <BookList books={books}/>
        </div>
        
        
    )
}

export default BookListPage