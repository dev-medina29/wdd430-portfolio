import Skills from "@/components/Skills";
export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className=" text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>
      <Skills
        langages={["C#", "Python", "JavaScript", "HTML", "CSS"]}
        contact="+242040492938"
        education="I hold a Master’s degree and have completed a BYU Pathway bachelor’s certificate in software development, along with a Python certification. I am currently pursuing advanced studies in statistics, regression, and software development to strengthen both my theoretical knowledge and practical skills."
      />
    </main>
  );
}
