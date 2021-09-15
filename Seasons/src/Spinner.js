import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const Spinner = () => {
    return (
        <div className="ui active dimmer">
        <div className="ui big text loader">{propTypes.message}</div>
        </div>
    );
};

Spinner.defaultProps ={
    message:'Loading...'
};

export default Spinner;