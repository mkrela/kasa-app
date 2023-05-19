import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // Effectue une requête fetch pour récupérer les données du fichier "db.json"
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }, []);

  // Retourne l'état apartments qui contient les données des appartements
  return apartments;
};
