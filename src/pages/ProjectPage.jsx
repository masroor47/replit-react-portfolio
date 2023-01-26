import { useParams } from 'react-router-dom';
import projects from './ProjectsListPage';
import NotFoundPage from './NotFoundPage';

const ProjectPage = ({ projects }) => {

  const params = useParams();
  const projectId = params.projectId;

  console.log(projects)

  const project = projects.find(project => project.name == projectId);

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center max-w-md">
        <h1>This is one of my projects:</h1>
        <h2>Title: {project.name}</h2>
        <h2>Made By: {project.author}</h2>
        <h2>Programming Language(s): {project.language}</h2>
        <p>Description: {project.description}</p>
      </div>
    </div>
  );
}

export default ProjectPage;