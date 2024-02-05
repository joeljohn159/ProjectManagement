import './App.css'
import { useState } from 'react';

import MainSideBar from './components/MainSideBar';
import MainProjectSave from './components/MainProjectSave';
import NoProject from './components/NoProject';

function App() {
  const [projectInfo, setProjectInfo] = useState({
    projectId: undefined,
    projects:[]
  })

  let content;
  
  function handleStartProject(){
    setProjectInfo(prevState =>{
      return {
        ...prevState,
        projectId: null
      }
    })
  }
  function handleAddProject(objProject){
    let project = {...objProject}
    setProjectInfo(prevState =>{
      return {
        ...prevState,
        projects : [...prevState.projects, project],
        projectId: undefined
      }
    });
    console.log(projectInfo)
  }
  if (projectInfo.projectId === undefined){
    content = <NoProject handleStart={handleStartProject} />
  }else if (projectInfo.projectId === null){
    console.log("Yes I clicked")
    content = <MainProjectSave  handleAddProject={handleAddProject}/>
  }



  return (
    
    <main id='home'>
    <MainSideBar handleStart={handleStartProject} projectData={projectInfo.projects} />
    {content}
    
    </main>
    
  )
}

export default App
