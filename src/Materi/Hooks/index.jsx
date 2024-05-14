import { Button } from "bootstrap";
import { useState } from "react";
import Counter from "./Pembahasan/Counter";
import { useToggle } from "./Pembahasan/useToggle";

const Hooks = () => {
  const [value, setvalue] = useState(0);
  const [label, setLabel] = useState("ON");
  const [lampu, setLampu] = useToggle();

  function handlePlus() {
    setvalue(value + 1);
  }

  function handleMin() {
    if (value > 0) {
      setvalue(value - 1);
    }
  }

  function handleLamp() {
    setLampu(!lampu);
    if (label === "ON") {
      return setLabel("OFF");
    } else {
      return setLabel("ON");
    }
  }

  const style = {
    background: lampu ? "yellow" : "black",
    textAlign: "center",
    height: "400px",
  };
  return (
    <div style={style}>
      <Counter value={value} handlePlus={handlePlus} handleMin={handleMin} />
      <button onClick={handleLamp}>{label}</button>
    </div>
  );
};

export default Hooks;
