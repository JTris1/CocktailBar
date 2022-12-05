import './Card.css';
import Image from'../Image/Image';
import Ingredients from '../Ingredients/Ingredients';

function Card(props) {

    return (
        <div className="card">
            <Image src={props.image} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
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
    )
    
}

export default Card;