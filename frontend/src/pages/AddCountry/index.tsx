import { useAddCountryMutation } from "@/graphql/generated/schema";
import { useState } from "react";

const AddCountryPage = () => {
  const [formData, setFormData] = useState({ code: '', name: '', emoji: '' });
  const [addCountry, { loading, error }] = useAddCountryMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCountry({ variables: { data: formData } });
      alert('Pays ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du pays', error);
      alert('Erreur lors de l\'ajout du pays');
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors de l'ajout du pays. Veuillez réessayer ultérieurement.</p>;

  return (
    <div>
      <h2>Ajouter un Pays</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="code" placeholder="Code" value={formData.code} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
        <input type="text" name="emoji" placeholder="Emoji" value={formData.emoji} onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddCountryPage;
