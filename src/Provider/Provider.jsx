import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const themeContext = createContext();
const Provider = ({children}) => {

    const [dark, setDark] = useState(false);
    const Info = { dark, setDark};
    return (
        <themeContext.Provider value={Info}>
            {children}
        </themeContext.Provider>
    );
};

export default Provider;

Provider.propTypes = {
    children: PropTypes.node
}