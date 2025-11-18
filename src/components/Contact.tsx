import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const links = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:haileamlakbeat@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/haileamlak"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Haileamlak"
    }
  ];

  return (
    <section id="contact" className="py-8 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <h2 className="text-base text-muted-foreground mb-6">Online</h2>
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 text-foreground/90 hover:text-accent transition-colors group"
            >
              <link.icon className="w-4 h-4 flex-shrink-0" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
