import './App.css';
import './css/grid.css';
import './css/queries.css';
import './css/style.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/cart' exact component={Cart}/>
            </BrowserRouter>
        </>
    );
}

export default App;