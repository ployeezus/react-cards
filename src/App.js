import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.icon} card__descriptionIcon`} />
                    
                <div className="card__descriptionText">
                    {props.description}
                    <br/>
                    {props.hint}
                </div>
            </div>
        <div className="card__price">{props.price}</div>
                
    </div>
);

const App = () => (
    <CardGroup>
        <Card description="Trial" icon="fa-thumbs-o-up" price="Free!"></Card>
        <Card description="Basic Tier" hint="(most popular)" icon="fa-trophy" price="$10.00"></Card>
        <Card description="Advance tier" hint="(only for enterprise-level professionals)" icon="fa-bolt" price="$6,000.00"></Card>
    </CardGroup>
);

export default App;
