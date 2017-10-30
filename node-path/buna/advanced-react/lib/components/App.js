import React, { Component } from "react";

import DataAPI from "../DataAPI";
import { data } from "../testData";

import ArticleList from './ArticleList';

const api = new DataAPI(data);

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    const { articles } = this.state;

    return (
      <ArticleList articles={articles} articleActions={this.articleActions} />
    );
  }
}

export default App;
