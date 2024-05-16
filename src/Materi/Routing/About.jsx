import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../home");
  };
  return (
    <>
      <h1>about</h1>
      <button onClick={handleClick}>ke home</button>
    </>
  );
};

export default About;
