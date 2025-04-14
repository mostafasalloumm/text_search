
import React from 'react';
import './articles.css'; // Make sure to create this CSS file
import articles from '../constant/articles.json'
const ArticleList = () => {
    return (
      <div className="container">
        <h1 className="title">Software Engineering Articles</h1>
        <div className="grid">
          {articles.articles.map((article, index) => (
            <div className="card" key={index}>
              {article.image && (
                <img src={article.image} alt={article.title} className="image" />
              )}
              <h2 className="heading">{article.title}</h2>
              <p className="description">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ArticleList;