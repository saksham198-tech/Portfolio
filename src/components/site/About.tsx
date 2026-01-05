import SectionWrapper from "./SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border-2 border-accent/10 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-center text-foreground/80 leading-relaxed">
              I am a passionate and driven student with a strong foundation in computer science and a keen interest in Artificial Intelligence and Machine Learning.
              My goal is to leverage my skills in software development and problem-solving to contribute to innovative projects and create technology that makes a difference. I'm a quick learner, a collaborative team player, and I'm always excited to take on new challenges.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default About;
