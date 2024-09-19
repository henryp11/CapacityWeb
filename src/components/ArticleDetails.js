import React from 'react';
import '../styles/articles.css';

const ArticleDetails = ({ title, text, link, nameLink }) => {
  return (
    <div className='article-det'>
      <h4>{title}</h4>
      <p>
        {text}
        <br />
      </p>
      {link && (
        <a href={link} target='_blank' className='externalLinks'>
          <strong>{nameLink}</strong>
        </a>
      )}
    </div>
  );
};

export default ArticleDetails;
