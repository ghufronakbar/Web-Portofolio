import Projects from "./Projects";

export interface PreviewProjectsType {
  title: string;
  thumbnail: string;  
}

const previewFromProjects = (): PreviewProjectsType[] => {
  let previewProjects: PreviewProjectsType[] = [];
  Projects.forEach((project) => {
    previewProjects.push({
      title: project.name,
      thumbnail: project.images[0],
    });    
  });
  Projects.forEach((project) => {
    previewProjects.push({
      title: project.name,
      thumbnail: project.images[1],
    });    
  });
  Projects.forEach((project) => {
    previewProjects.push({
      title: project.name,
      thumbnail: project.images[3],
    });    
  });
  return previewProjects;
}

const PreviewProjects = previewFromProjects();

export default PreviewProjects;
