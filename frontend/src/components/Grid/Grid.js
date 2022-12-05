import { useState, useEffect } from 'react';

import Card from '../Card/Card';
import './Grid.css';

function Grid(props) {
    const [cards, setCards] = useState([]);

    const recipes = props.recipes

    useEffect(() => {
        const tempCards = recipes.map((recipe) => {
            return <Card key={recipe._id} name={recipe.name} category={recipe.category} garnish={recipe.garnish} glass={recipe.glass} image={recipe.image} ingredients={recipe.ingredients} preparation={recipe.preparation} />
        });

        // This breaks down the tempCards list into 2 individual arrays.
        // This is used to render recipes into 2 different columns.
        const chunkedCards = [];
        for(let i = 0; i < tempCards.length; i += tempCards.length / 2) {
            const chunk = tempCards.slice(i, i + tempCards.length / 2);
            chunkedCards.push(chunk);
        }

        setCards(chunkedCards);
    }, [recipes]);

    return (
        <div className='card-grid'>
            <div className='row row-cols-auto'>
                <div className='col'>
                    {cards[0]}
                </div>
                <div className='col'>
                    {cards[1]}
                </div>
                {/* <div className='col'>
                    {cards[1]}
                </div> */}
            </div>
        </div>
    )
}

export default Grid;