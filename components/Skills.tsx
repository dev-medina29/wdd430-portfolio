interface SkillsProps {
  langages: string[];
  contact: string;
  education: string;
}
export default function Skills({ langages, contact, education }: SkillsProps) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Education : </h2>
      <p className="text-lg text-gray-700">{education}</p>
      <h2 className="text-3xl font-bold mb-4">Langages :</h2>
      <ul>
        {langages.map((langage) => (
          <li key={langage} className="text-lg text-gray-700">
            {langage}
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold mb-4">Contact :</h2>
      <p className="text-lg text-gray-700">{contact}</p>
    </>
  );
}
