// Adam en Xeno
async function getPokemon() {
            const name = document.getElementById("pokemonName").value.toLowerCase();
            const infoDiv = document.getElementById("pokemonInfo");
            
            infoDiv.innerHTML = "Bezig met laden...";

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                
                if (!response.ok) {
                    throw new Error("Pokémon niet gevonden");
                }

                const data = await response.json();

                const types = data.types.map(t => t.type.name).join(", ");

                infoDiv.innerHTML = `
                    <h2>${data.name.toUpperCase()}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p><strong>Type:</strong> ${types}</p>
                    <p><strong>Hoogte:</strong> ${data.height / 10} m</p>
                    <p><strong>Gewicht:</strong> ${data.weight / 10} kg</p>
                `;
            } catch (error) {
                infoDiv.innerHTML = "<p style='color:red;'>Pokémon niet gevonden 😢</p>";
            }
        }