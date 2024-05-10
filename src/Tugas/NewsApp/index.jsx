import React from "react";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";

export default class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true,
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async (searchQuery = "") => {
    try {
      let url =
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=be7c2e756aee4c8595d12356a553b283";
      if (searchQuery) {
        url += `&q=${searchQuery}`;
      }
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState({
        news: jsonData.articles,
        loading: false,
        searchQuery: searchQuery,
      });
    } catch (error) {
      console.error("Error Fetching News", error);
      this.setState({ loading: false });
    }
  };

  handleSearch = (searchQuery) => {
    this.setState({ loading: true }, () => {
      this.fetchNews(searchQuery);
    });
  };

  render() {
    const { news, loading, searchQuery } = this.state;
    return (
      <>
        <Navbar onSearch={this.handleSearch} />
        <Content news={news} loading={loading} searchQuery={searchQuery} />{" "}
      </>
    );
  }
}
