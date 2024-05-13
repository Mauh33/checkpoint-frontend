import { useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

const CountryDetailsPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const { loading, error, data } = useCountryQuery({
    variables: { code: code as string }
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Nos services rencontrent des difficultés, veuillez réessayer ultérieurement</p>;

  const country = data?.country;

  return (
    <div>
      <h2>Détails du Pays</h2>
      {country && (
        <>
          <p>Nom: {country.name}</p>
          <p>Emoji: {country.emoji}</p>
          <p>Continent: {country.continent ? country.continent.name : 'Inconnu'}</p>
        </>
      )}
    </div>
  );
}

export default CountryDetailsPage;
