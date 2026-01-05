import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Tech Solutions Inc.",
    period: "Summer 2023",
    description: "Developed and maintained features for a large-scale web application using React and Node.js. Collaborated with a team of developers in an agile environment, participating in daily stand-ups and code reviews."
  },
  {
    role: "Web Developer (Freelance)",
    company: "Various Clients",
    period: "2022 - Present",
    description: "Designed and built responsive websites for small businesses, handling everything from initial consultation and design to deployment and maintenance. Utilized technologies like WordPress, Next.js, and Tailwind CSS."
  }
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-muted/30">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-border hidden md:block -translate-x-px"></div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-4 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 transform border-4 border-background"></div>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
