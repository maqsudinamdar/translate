import React from 'react';
import ColorContext from '../contexts/ColorContext';

import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    renderSubmit( value ) {
        return value === 'english' ? 'Submit' : 'Sabmeet';
    }

    render() {

        return (
            <ColorContext.Consumer>
                {
                    (color) => 
                        <button className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                { (value) => this.renderSubmit(value) }
                            </LanguageContext.Consumer>
                        </button>
                }         
            </ColorContext.Consumer>
        );
    };
};

export default Button;