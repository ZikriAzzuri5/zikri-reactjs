import { useState, useEffect } from "react";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";

export default function Berita() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchBerita = async () => {
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
    fetchBerita();
  }, [searchTerm]);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Content articles={articles} />
    </>
  );
}
