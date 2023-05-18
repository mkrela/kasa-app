import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }, []);

  return apartments;
};
