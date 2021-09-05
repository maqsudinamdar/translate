import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    renderTitle(value) {
        return value === 'english' ? 'Name' : 'Naam';
    }

    render() {

        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        { value => this.renderTitle(value) }
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    };
};


export default Field;