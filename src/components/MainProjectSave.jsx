import {useRef} from 'react';
import Modal from './Modal';

export default function MainProjectSave({handleAddProject}){
    let title = useRef();
    let description = useRef();
    let date = useRef();

    let dialog = useRef();

    function handleSubmit(){
    // Validate User Info
    if(title.current.value.trim() === "" || description.current.value.trim() === "" || date.current.value === ''){
        dialog.current.openModal();
        return ;
    }
        handleAddProject({
            title : title.current.value,
            description : description.current.value,
            date: date.current.value,
            id: Math.random()
        })
    };

  


    


    return (
        <>
        <Modal ref={dialog} dialogContent="Close"><h1>Incomplete Information</h1><p>Kindly fill all data in the Input</p></Modal>
        <div className="formContainer" >
            <p>
                <label>TITLE</label>
                <input ref={title} className="inputBox" type="text" />
            </p>
            <p>
                <label>DESCRIPTION</label>
                <textarea ref={description} name="description" id="" cols="100" rows="10"></textarea>
            </p>
            <p>
                <label >DUE DATE</label>
                <input ref={date} className="inputBox" type="date" />
            </p>
            <input className="mainButton" type="submit" onClick={handleSubmit}/>
            <button className="mainButton">Cancel</button>
        </div>
        
        </>
    );
    
}