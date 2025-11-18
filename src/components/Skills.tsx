import arrowIcon from '@/assets/right-down.png'
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Go", "C++", "JavaScript", "Java"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firestore", "Redis"]
    },
    {
      title: "Tools",
      skills: ["GCP", "Figma", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-8 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <h2 className="text-base text-muted-foreground mb-6">Skills</h2>
        <div className="space-y-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-foreground/50 text-sm mt-0.5"><img src={arrowIcon} alt="" className='w-6 h-6' /></span>
              <div>
                <span className="text-foreground font-medium">{category.title}</span>
                <span className="text-muted-foreground ml-2">{category.skills.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
