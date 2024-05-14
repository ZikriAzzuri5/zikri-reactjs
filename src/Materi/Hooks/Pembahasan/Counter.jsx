const Counter = ({ handlePlus, value, handleMin }) => {
  return (
    <div>
      <button onClick={handlePlus}> + </button>
      <span>{value}</span>
      <button onClick={handleMin}> - </button>
    </div>
  );
};

export default Counter;
