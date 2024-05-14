export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search news..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
