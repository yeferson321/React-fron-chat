import { React, useContext } from 'react';
import './NavbarTwo.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function NavbarTwo() {

    const { isLoggedIn } = useContext(DataContext);

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-chevron-left"></i>
                </Link>
                {isLoggedIn ?

                    <div>
                        <div className="btn-group">
                            <button type="button" className='button' data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="bell"><i className="bi bi-bell"></i></div>
                                <div><img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Ficon.jpg?alt=media&token=06deb95c-8a13-4765-98f2-fb2636f35995" className="rounded" alt="..." /></div>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" type="button">Perfil</button></li>
                                <li><button className="dropdown-item" type="button">Pagos</button></li>
                                <li><button className="dropdown-item" type="button">Salir</button></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                }

            </div>
        </nav>
    )
}

export default NavbarTwo