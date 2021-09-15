import { useEffect, useState, useCallback } from 'react';
import { Container, Box, Typography } from '@material-ui/core';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { GeneralBtn } from '../../components/GeneralBtn';
import { TextInput } from '../../components/TextInput';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  return (
    <Container className="container" >
      <Box className="search-container">
        {!!searchValue && (
          <Typography 
          gutterBottom 
          variant="h5" 
          component="h2" 
          >
              Search value: {searchValue}
          </Typography>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </Box>

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )
      }

      {
        filteredPosts.length === 0 && (
          <p>Não existem posts =(</p>
        )
      }

      <Box className="button-container">
        {!searchValue && (
          <GeneralBtn
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </Box>

    </Container >
  );
}