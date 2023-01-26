import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectPage from './pages/ProjectPage';
import ContactUsPage from './pages/ContactUsPage';


function App() {

  const projectsCollectionRef = collection(db, "projects");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef);
      console.log(data)

      data.docs.map(doc => {
        console.log(doc.data())
      })

      setProjects(data.docs.map((doc) => ({
        ...doc.data(), id: doc.key
      })));
      console.log(projects)
    };

    getProjects();
  }, []);

  return (

    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-blue-100">

        <NavBar />

        <div className="flex-1 bg-green-200">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsListPage projects={projects} />} />
            <Route path="/projects/:projectId" element={<ProjectPage projects={projects} />} />
            <Route path="/contactus" element={<ContactUsPage />} />

          </Routes>
        </div>

        <Footer />

      </div>

    </BrowserRouter>


  );
}

export default App;