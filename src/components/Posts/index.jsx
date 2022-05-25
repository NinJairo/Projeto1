import {PostCard} from '../PostCard';

import './styles.css';

export const Posts = ({ posts }) => (

    <div className="posts">
    {posts.map(({id, title, body, cover}) => (
      <PostCard
      key={id} 
      title={title}
      body={body}
      id={id}
      cover={cover}
      />
    ))}
    </div>

    
);