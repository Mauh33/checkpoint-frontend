
import { useCountriesQuery } from "@/graphql/generated/schema";

const CountriesList = () => {
  const { loading, error, data } = useCountriesQuery();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Nos services rencontres des difficultés, veuillez réessayez ultérieurement </p>

  return (
    <div>
      <h2>Liste des Pays</h2>
      <ul>
        {
          data?.countries.map(country => (
            <li key={country.id}>
              {country.name} - {country.emoji}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default CountriesList;
