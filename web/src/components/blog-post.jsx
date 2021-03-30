import { format, parseISO } from 'date-fns';
import React from 'react';
import PortableText from './portableText';
import { Link } from "gatsby";
import { globalHistory } from '@reach/router';



function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props

  return (
    <article className="blogContent">
      <div>
        <div className="postHeader">
          <p className="postDate">{format(parseISO(publishedAt), 'MMM dd, yyyy ')}</p>
          <h2 className="postTitle">{title}</h2>
        </div>
        <div className="blogBody">
          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
        <div className="blogCategories">
          {categories.map((category) => {
            return (
              <div key={category._id}>
                <Link to={"/writing"} state={{ category: category.id }}>#{category.title}</Link>
              </div>
            )
          })}
        </div>
        <div className="blogButton">
          <Link to="/writing">
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPost