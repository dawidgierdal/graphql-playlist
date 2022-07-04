import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
    }
  }
`;

export const BookList = () => {
    const { data, loading } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;

      console.log('data', data)
    return (
        <div>
            <ul>
                <li>Book name</li>
            </ul>
        </div>
    );
};