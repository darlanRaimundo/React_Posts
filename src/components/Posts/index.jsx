import { Box } from '@material-ui/core';

import './styles.css';

import { PostCard } from "../PostCard";

export const Posts = ({posts}) => (
    <Box className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                cover={post.cover}
            />
        ))}
    </Box>
)