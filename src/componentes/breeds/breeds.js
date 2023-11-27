import React, { useState, useEffect } from 'react';
import styles from "./breeds.module.css";

function DogBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        const data = await response.json();

        // Obtencion de la imagen por cada raza
        const breedsWithImages = await Promise.all(
          data.map(async breed => {
            const imageResponse = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breed.id}`);
            const imageData = await imageResponse.json();
            if (imageData && imageData.length > 0) {
              return { ...breed, image: imageData[0].url };
            }
            return breed;
          })
        );

        setBreeds(breedsWithImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div name="Razas" style={styles.breeds}>
      <h1>Listado de Razas de Perros con Imágenes</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed.id}>
            <h3>{breed.name}</h3>
            {breed.image && <img src={breed.image} alt={breed.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogBreeds;