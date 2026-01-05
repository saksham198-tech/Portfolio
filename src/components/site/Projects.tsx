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
    title: "AI Project Recommender",
    description: "A GenAI-powered tool that suggests personalized project ideas based on a user's skillset and interests to help them learn and grow.",
    tags: ["GenAI", "Next.js", "Firebase"],
    image: PlaceHolderImages.find(p => p.id === 'project-ai-tool'),
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, a shopping cart, and a checkout process. Integrated with a backend for order management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: PlaceHolderImages.find(p => p.id === 'project-e-commerce'),
    liveLink: "#",
    githubLink: "#"
  },
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
