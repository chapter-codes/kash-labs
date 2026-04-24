export interface Project {
    projectName : string;
    projectLink: string;
    image: Record<string, string>
    tags: string[]
    projectDescription? : string
}