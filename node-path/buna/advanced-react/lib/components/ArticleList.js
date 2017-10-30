import React from "react";

// Components
import Article from "./Article";

const ArticleList = props => {
  const { articles } = props;

  return (
    <div>
      {Object.values(articles).map(article => (
        <Article
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      ))}
    </div>
  );
};

export default ArticleList;
