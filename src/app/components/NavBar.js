import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav className="main-nav">
            <ul>
                <li><Link className='main-nav-item' to='/'></Link>Home</li>
                <li><Link className='main-nav-item' to='/EmployeeList'>Employee List</Link></li>
            </ul>
        </nav>
    );
}