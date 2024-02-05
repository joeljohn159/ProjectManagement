export default function MainSideBar({handleStart,projectData}){
    return (
        <aside id="mainSideBarContainer">
            <div>
            <h1>Your Project</h1>
            <button onClick={handleStart}><b>+</b> Add Project</button>
            </div>
            <ul>
                {projectData.map(item=><li key={item.id}>{item.title}</li>)}
            </ul>
        </aside>

    );
}