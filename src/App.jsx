import { useContext } from 'react';
import Home from './Pages/Home/Home/Home'
import { themeContext } from './Provider/Provider';
function App() {
  const { dark } = useContext(themeContext);

  const containerStyle = {
    backgroundColor: dark ? '#333333' : '#ffffff',
    color: dark ? '#ffffff' : '#333333',
  };

  return (

    <div style={containerStyle}>
      <Home></Home>
    </div>
  )
}

export default App
