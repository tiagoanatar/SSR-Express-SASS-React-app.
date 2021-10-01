import React, {useState} from 'react';

const Card = ({id, postId, name, body}) => {

  const [favorite, setFavorite] = useState(false)

  return (
    <a key={id} onClick={() => setFavorite(!favorite)}>
      <figure className={favorite === false ? 'favorite-off' : 'favorite-on'} style={{backgroundImage: `url("https://picsum.photos/id/${id}/200/300")`}}>
        <div className="date">
          <span className="card-date-day">ID</span><span className="card-date-month">{postId}</span>
        </div>
        <figcaption>
          <h4> <span>{name}</span></h4>
          <p>{body}</p>
        </figcaption>
      </figure>
    </a>
  );
};

export default Card;
