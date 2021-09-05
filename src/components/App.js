import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import UserCreate from './UserCreate';

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
                <LanguageContext.Provider value={this.state.language} >
                    <UserCreate />
                </LanguageContext.Provider>

            </div>
        );
    };
}


export default App;