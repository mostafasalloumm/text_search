import React, { useState } from 'react';
import './articles.css';
import articles from '../constant/articles.json';

// Function to highlight
const highlightText = (text, searchedWord) => {
  if (!searchedWord) return text; 
//create a regular expression to match the searched word
//split the text to parts and search in each part
//change the class of the founded word and puting it as span and returning it
  const regex = new RegExp(`(${searchedWord})`, 'gi'); 
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchedWord.toLowerCase() ? (
      <span key={index} className="highlight">{part}</span> 
    ) : (
      part
    )
  );
};

const ArticleList = () => {
  const [searchedWord, setsearchedWord] = useState('');

  return (
    <div className="article-container">
      <h1 className="title">Software Engineering Articles</h1>
      <input
        type="text"
        className="search-box"
        placeholder="Search articles"
        value={searchedWord}
        onChange={(e) => setsearchedWord(e.target.value)}
      />

      <div className="article-grid">
        {articles.articles.map((article, index) => (
          <div className="article-card" key={index}>
            {article.image && (
              <img src={article.image} alt={article.title} className="article-image" />
            )}
            <h2 className="article-heading">
              {highlightText(article.title, searchedWord)}
            </h2>
            <p className="article-description">
              {highlightText(article.description, searchedWord)} 
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
