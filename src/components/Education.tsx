import aauLogo from '@/assets/aau-logo.png';
const Education = () => {
  return (
    <section id="education" className="py-8 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <h2 className="text-base text-muted-foreground mb-6">Education</h2>
        <div className="flex items-start gap-3">
          <span className="text-foreground/50 text-sm mt-0.5"><img src={aauLogo} alt="" className='w-6 h-6'/></span>
          <div>
            <div className="flex items-baseline gap-2 flex-wrap mb-1">
              <span className="text-foreground font-medium">Addis Ababa University</span>
              <span className="text-muted-foreground">B.Sc. Computer Science</span>
            </div>
            <p className="text-muted-foreground text-sm">Jun 2021 - Jul 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
