import './Card.css';

function Card(props) {
    const ingredientList = props.ingredients.map((i, index) => {
        return <li key={index}>{i.ingredient} <span className="text-muted">({`${i.amount} ${i.unit}`})</span></li>
    })

    return (
        <div className="card">
            <img src={"/images/" + props.image} className="card-img-top" alt="Cocktail" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                <h6 className="fw-bold mb-1">Glass</h6>
                <p className="card-text text-capitalize">{props.glass}</p>
                <h6 className="fw-bold mb-1">Ingredients</h6>
                <ul>
                    {ingredientList}
                </ul>
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