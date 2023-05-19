import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Création d'un objet AbortController pour annuler la requête fetch si nécessaire
    const abortController = new AbortController();

    // Effectue une requête fetch pour récupérer les données du fichier "db.json"
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        // Recherche de l'appartement correspondant à l'ID passé dans location.state.apartmentId
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        // Met à jour l'état flat avec l'appartement trouvé
        setFlat(flat);
      })
      .catch(console.error);

    // Retourne une fonction de nettoyage qui sera exécutée lors du démontage du composant
    return () => {
      // Annule la requête fetch en appelant la méthode abort() de l'AbortController
      abortController.abort();
    };
  }, []);

  // Retourne l'état flat qui contient l'appartement
  return flat;
}
