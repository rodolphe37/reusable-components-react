import React from 'react';
import './CheckBoxStyles.scss';

const CheckBoxStyles = () => {
    return (
    <div>
    <h1>CSS3 Checkbox Styles</h1>
    <em>Click any button below</em>
    <div className="ondisplay">
        <section title=".slideOne">
        {/* .slideOne */}
        <div className="slideOne">  
            <input type="checkbox" defaultValue="None" id="slideOne" name="check" defaultChecked />
            <label htmlFor="slideOne" />
        </div>
        {/* end .slideOne */}
        </section>
        <section title=".slideTwo">
        {/* .slideTwo */}
        <div className="slideTwo">  
            <input type="checkbox" defaultValue="None" id="slideTwo" name="check" defaultChecked />
            <label htmlFor="slideTwo" />
        </div>
        {/* end .slideTwo */}
        </section>
        <section title=".slideThree">
        {/* .slideThree */}
        <div className="slideThree">  
            <input type="checkbox" defaultValue="None" id="slideThree" name="check" defaultChecked />
            <label htmlFor="slideThree" />
        </div>
        {/* end .slideThree */}
        </section>
        <section title=".roundedOne">
        {/* .roundedOne */}
        <div className="roundedOne">
            <input type="checkbox" defaultValue="None" id="roundedOne" name="check" defaultChecked />
            <label htmlFor="roundedOne" />
        </div>
        {/* end .roundedOne */}
        </section>
        <section title=".roundedTwo">
        {/* .roundedTwo */}
        <div className="roundedTwo">
            <input type="checkbox" defaultValue="None" id="roundedTwo" name="check" defaultChecked />
            <label htmlFor="roundedTwo" />
        </div>
        {/* end .roundedTwo */}
        </section>
        <section title=".squaredOne">
        {/* .squaredOne */}
        <div className="squaredOne">
            <input type="checkbox" defaultValue="None" id="squaredOne" name="check" defaultChecked />
            <label htmlFor="squaredOne" />
        </div>
        {/* end .squaredOne */}
        </section>
        <section title=".squaredTwo">
        {/* .squaredTwo */}
        <div className="squaredTwo">
            <input type="checkbox" defaultValue="None" id="squaredTwo" name="check" defaultChecked />
            <label htmlFor="squaredTwo" />
        </div>
        {/* end .squaredTwo */}
        </section>
        <section title=".squaredThree">
        {/* .squaredThree */}
        <div className="squaredThree">
            <input type="checkbox" defaultValue="None" id="squaredThree" name="check" defaultChecked />
            <label htmlFor="squaredThree" />
        </div>
        {/* end .squaredThree */}
        </section>
        <section title=".squaredFour">
        {/* .squaredFour */}
        <div className="squaredFour">
            <input type="checkbox" defaultValue="None" id="squaredFour" name="check" defaultChecked />
            <label htmlFor="squaredFour" />
        </div>
        {/* end .squaredFour */}
        </section>
    </div>
    </div>

    )
}

export default CheckBoxStyles;
