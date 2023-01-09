import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>iStocks</div>
            </Link>
            <Link to='/currencies'>
                <div>Stocks</div>
            </Link>
            <Link to='/'>
                <div>About</div>
            </Link>
        </div>
    );
}

export default Nav;