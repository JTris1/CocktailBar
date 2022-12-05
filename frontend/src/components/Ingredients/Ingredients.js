export default function Ingredients(props) {
    const ingredientList = props.ingredients.map((i, index) => {
        return <li key={index}>{i.ingredient} <span className="text-muted">({`${i.amount} ${i.unit}`})</span></li>
    })

    return (
        <>
            <h6 className="fw-bold mb-1">Ingredients</h6>
            <ul>
                {ingredientList}
            </ul>
        </>
        
    )
}