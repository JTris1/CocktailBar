import './Modal.css';
import Ingredients from "../Ingredients/Ingredients";
import { createPortal } from 'react-dom';

export default function Modal(props) {
    return createPortal(
        <>
            <div className='modal-overlay' onClick={() => props.onClose()} />
            <div className="modal-body-no-bs">
                <span 
                    className='material-symbols-outlined modal-close-button' 
                    onClick={() => props.onClose()}
                    >close</span>
                <h6 className="fw-bold mb-1">Glass</h6>
                    <p className="card-text text-capitalize">{props.glass}</p>
                    <Ingredients ingredients={props.ingredients} />
                    {props.garnish === undefined ? null : 
                        <>
                            <h6 className="fw-bold mb-1">Garnish</h6>
                            <p className="card-text">{props.garnish}</p>
                        </>
                    }
                    <h6 className="fw-bold mb-1">Preparation</h6>
                    <p className="card-text">{props.preparation}</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}