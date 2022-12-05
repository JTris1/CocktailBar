import './Image.css';

function Image(props) {
    return (
        <img src={"/images/" + props.src} className="card-img-top" alt="Cocktail" />
    )
    
}

export default Image;