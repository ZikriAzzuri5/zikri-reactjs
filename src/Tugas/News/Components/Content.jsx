const Content = ({ articles }) => {
  return (
    <div className="container mt-4">
      <div className="row d-flex">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
