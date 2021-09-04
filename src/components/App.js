import React from 'react';

import Field from './Field';
import Button from './Button';

class App extends React.Component {

    state = { language: 'english'};

    onLanguageSelect = (language) => {
        this.setState({ language: language });
    }
    

    render() {

        return (
            <div className="ui container">
                <div>
                    Select a Language:  
                    <i 
                        className="flag us" 
                        onClick={ () => this.onLanguageSelect('english') }
                    />
                    <i 
                        className="flag nl" 
                        onClick={ () => this.onLanguageSelect('dutch') }
                    />
                </div>
                <Field />
                <Button />
            </div>
        );
    };
}


export default App;