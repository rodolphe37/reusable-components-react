import React from 'react';
import './BurgerOrPizza.scss';

const BurgerOrPizza = () => {
    return (
    <div className="hvcenter">
        <div className="emoji-toggle emoji-food ">
            <input type="checkbox" id="toggle3" className="toggle" />
            <div className="emoji" />
            <label htmlFor="toggle3" className="well" />
        </div>
    </div>

    )
}

export default BurgerOrPizza;
