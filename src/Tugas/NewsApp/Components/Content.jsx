/* eslint-disable react/prop-types */
import React from "react";

export default class Content extends React.Component {
  render() {
    const { news, loading, searchQuery } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    const filteredNews = news.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="container mt-4">
        <div className="row d-flex">
          {filteredNews.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
