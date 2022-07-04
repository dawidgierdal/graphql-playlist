import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';

export const BookList = () => {
    const { data, loading } = useQuery(GET_BOOKS);

    const booksToRender = data?.books?.map(({ name, id }) => <li key={id}>{name}</li>)

    return (
        <div>
            <ul>
                {loading ? <p>Loading...</p> : booksToRender}
            </ul>
        </div>
    );
};