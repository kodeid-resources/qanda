import React from 'react';

const List = ({ posts }) => {
  return (
    <div className="listing">
      {Object.keys(posts).map((key) => (
        <div key={key}>
          <div className="title">{posts[key].title}</div>
          <div className="votes">
            <div>
              <span role="img" aria-label="thumbs-up">
                👍
              </span>
              <span>{posts[key].upvote || 0}</span>
            </div>
            <span>
              <span role="img" aria-label="thumbs-down">
                👎
              </span>{' '}
              {posts[key].downvote || 0}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
