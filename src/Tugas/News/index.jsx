import { useEffect, useState } from "react";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const query = searchTerm || "latest news";
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=be7c2e756aee4c8595d12356a553b283`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [searchTerm]);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Content articles={articles} />
    </>
  );
}
