import { useState } from 'react';

import './Card.css';
import Image from'../Image/Image';
import Modal from'../Modal/Modal';

function Card(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            {isShown ? <Modal onClose={() => setIsShown(false)} glass={props.glass} ingredients={props.ingredients} garnish={props.garnish} preparation={props.preparation} /> : null}
            <div className="card" onClick={() => {
                setIsShown(true)
            }}>
                <Image src={props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                </div>
            </div>
        </>
    )
    
}

export default Card;