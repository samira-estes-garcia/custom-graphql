import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_INFO } from '../graphql/get-info'

export const Container = () => {
    const { data: { posts = [] } = {} } = useQuery(GET_INFO);

    return (
        <div className="container">
            {posts && posts.map(posts => JSON.stringify(posts))}
        </div>
    )
}