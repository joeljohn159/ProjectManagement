export default function NoProject({handleStart}){
    return (
        <div id="noProjectContainer">
        < img className="bookImage" src="test.png" alt="Book" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one.</p>
        <p>
            <button onClick={handleStart}>Create new Project</button>
        </p>
        </div>
        
        
    );
}