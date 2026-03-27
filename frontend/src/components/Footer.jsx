import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/10 text-center text-gray-400 text-sm">
      <div className="flex justify-center gap-4 mb-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${personalInfo.email}`}>Email</a>
      </div>
      © {new Date().getFullYear()} ANIKET KUMAR SINGH. All rights reserved.
    </footer>
  );
};

export default Footer;
