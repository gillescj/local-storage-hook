import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const App = () => {
    const [firstName, setName] = useLocalStorage('firstName', '');
    const [attending, setAttending] = useLocalStorage('attending', false);

    const handleTextFieldChange = (event) => {
        setName(event.target.value);
    };

    const handleCheckboxChange = () => {
        setAttending((previousAttending) => {
            return !previousAttending;
        });
    };

    return (
        <div>
            <input
                name="first-name"
                type="text"
                value={firstName}
                onChange={handleTextFieldChange}
                placeholder="First Name"
            />
            <br />
            <label htmlFor="attending">Attending</label>
            <input
                name="attending"
                type="checkbox"
                value={attending}
                checked={attending}
                onChange={handleCheckboxChange}
            />
        </div>
    );
};

export default App;
