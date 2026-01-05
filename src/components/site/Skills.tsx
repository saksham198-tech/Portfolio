import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skills = {
  "Programming Languages": ["C", "Java", "Python"],
  "Web Development": ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js", "Express.js"],
  "Databases": ["SQL", "MongoDB"],
  "Tools": ["Postman", "Git", "GitHub"],
  "Deployment": ["Vercel", "Netlify"]
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, list]) => (
          <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {list.map(skill => (
                  <li key={skill} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
