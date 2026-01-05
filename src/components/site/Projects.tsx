import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio",
    description: "An interactive portfolio website to showcase my skills, projects, and experience. Built with Next.js, TypeScript, and Tailwind CSS for a modern, responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    image: PlaceHolderImages.find(p => p.id === 'project-portfolio'),
    liveLink: "#",
    githubLink: "https://github.com/saksham198-tech"
  },
  {
    title: "Weather Forecasting",
    description: "Developed a responsive web application to display real-time weather data. Integrated external Weather API for accurate forecasting.",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: PlaceHolderImages.find(p => p.id === 'project-weather'),
    liveLink: "https://weatherforecast198.vercel.app",
    githubLink: "https://github.com/saksham198-tech/weatherforecast198"
  },
  {
    title: "EatHealthy",
    description: "Built a health and fitness web platform promoting nutrition awareness. Optimized frontend performance and UI structure.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    image: PlaceHolderImages.find(p => p.id === 'project-eathealthy'),
    liveLink: "https://fithealthknown.vercel.app",
    githubLink: "https://github.com/saksham198-tech/Healthknown"
  },
    {
    title: "IPL Studio",
    description: "Developed an interactive IPL analytics platform with team and player insights. Improved data readability using dynamic rendering and visualization.",
    tags: ["React", "JavaScript", "Data Visualization"],
    image: {
      id: 'project-ipl-updated',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__8cHazDtkbXRrSny-VT8rzuNCMTL1px-yxgWcx00E1JSVrhX0VktW95tK3QFXJKAES4&usqp=CAU',
      description: 'Screenshot of a cricket data analysis app.',
      imageHint: 'cricket analysis'
    },
    liveLink: "https://iplanalysis198.vercel.app",
    githubLink: "https://github.com/saksham198-tech/iplanalysis198"
  }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {project.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="h-20 text-ellipsis overflow-hidden">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter className="flex justify-start gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
