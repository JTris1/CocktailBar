import './Modal.css';
import Ingredients from "../Ingredients/Ingredients";
import Image from '../Image/Image';
import { createPortal } from 'react-dom';

export default function Modal(props) {
    return createPortal(
        <>
            {/* Overlay is the transparent background of modal */}
            <div className='modal-overlay' onClick={() => props.onClose()} />
            <div className="modal-no-bs">
                <div className='modal-header'>
                    <span className='material-symbols-outlined modal-close-button counter-balance'>
                        close
                    </span>
                    <div className='modal-header-name'>
                        <h4 >{props.name}</h4>
                    </div>
                    
                    <span 
                        className='material-symbols-outlined modal-close-button' 
                        onClick={() => props.onClose()}
                        >
                        close
                    </span>
                </div>
                <hr />
                <div className='modal-body-no-bs'>
                    <div className='row'>
                        <div className='col'>
                            <Image className='modal-image' src={props.image} />
                        </div>
                        <div className='col'>
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
                    </div>
                </div>
            </div>
            
        </>,
        document.getElementById('portal')
    )
}