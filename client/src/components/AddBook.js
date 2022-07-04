import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../queries/queries';

export const AddBook = () => {
    const [bookValues, setBookValues] = useState({
        name: '',
        genre: '',
        authorId: '',
    })

    const { data, loading } = useQuery(GET_AUTHORS);
      const [addBook, { data: bookData }] = useMutation(ADD_BOOK);

    const authorsToRender = data?.authors?.map(({ name, id}) => <option key={id} value={id}>{name}</option>)

    const onSubmit = async (e) => {
        e.preventDefault();
        await addBook({
            variables: bookValues,
            refetchQueries: [{ query: GET_BOOKS }]
        })
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="book-name">Book name:</label>
            <input id="book-name" type="text" onChange={(e) => setBookValues({...bookValues, name: e.target.value})} />
            <label htmlFor="genre">Genre:</label>
            <input id="genre" type="text" onChange={(e) => setBookValues({...bookValues, genre: e.target.value})} />
            <label htmlFor="author">Author:</label>
            {loading ?
                <p>Loading...</p>
                : (
                    <select id="author" onChange={(e) => setBookValues({...bookValues, authorId: e.target.value})}>
                      { authorsToRender}
                    </select>
                )
            }
            <button type="submit">+</button>
        </form>
    );
};