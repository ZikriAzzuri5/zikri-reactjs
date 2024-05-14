import { useEffect, useState, useCallback } from "react";

const Identify = () => {
  const fetchUser = useCallback(() => ["zikri", "azzuri", "munggaran"], []);
  let [user, setUser] = useState([]);

  useEffect(() => {
    const data = fetchUser();
    setUser(data);
  }, [fetchUser]);
  return (
    <div>
      <ul>
        {user.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default Identify;
