import { forwardRef,useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({children, dialogContent}, ref){
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{
            openModal(){
                dialog.current.showModal();
            }
        };
    })
    return createPortal(
        <div className="dialogContainer">
        <dialog ref={dialog}>
            {children}
            <form method="dialog"><button>{dialogContent}</button></form>
        </dialog>
        </div>
        ,document.getElementById('modal-root')
    );
});
export default Modal;