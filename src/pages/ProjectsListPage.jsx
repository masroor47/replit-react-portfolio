import ListComponent from '../components/ListComponent'
// import fakeProjects from '../data/fakeProjects'



const ProjectsListPage = ({ projects }) => {

  return (
    <>
      <h1 className="text-3xl font-semibold p-4">Here are all of my projects:</h1>
      <ListComponent listItems={projects} />
    </>
  );
}

export default ProjectsListPage;