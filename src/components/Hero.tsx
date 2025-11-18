import heroImage from '@/assets/my-photo.jpg';

const Hero = () => {
  return (
    <section className="py-12 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <div className="flex items-start gap-6 mb-8">
          <img
            src={heroImage}
            alt="Haileamlak Belachew"
            className="w-16 h-16 rounded-full flex-shrink-0 object-cover"
          />
          <div>
            <h1 className="text-2xl font-normal mb-2">
              Hey, I'm Haileamlak Belachew. A software engineer based in Addis Ababa.
            </h1>
          </div>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            I'm currently working at <a href="https://eaglelionsystems.com" target="_blank" rel="noopener noreferrer">EagleLion System Technology</a>, where I build and maintain backend services that power large-scale enterprise systems. Before that, I served as a Head of Education at <a href="https://a2sv.org" target="_blank" rel="noopener noreferrer">A2SV</a>, helping students grow through structured guidance, problem-solving practice, and collaboration.
          </p>
          <p>
            Outside of tech, I enjoy playing football and reading books. I believe in continuous learning and am always looking for ways to improve myself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
