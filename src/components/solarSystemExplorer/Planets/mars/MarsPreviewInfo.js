import React from 'react';

const MarsPreviewInfo = () => {
    return (
        <label className="menu mars" htmlFor="mars">
            <div className="preview" />
            <div className="info">
                <h2>
                    <div className="pip" />
                    Mars
                </h2>
                <h3>1.524 AU</h3>
            </div>
        </label>
    )
}

export default MarsPreviewInfo;
