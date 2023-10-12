export default function NavBar() {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="/menu">
                Menu
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Breakfast & Lunch</a></li>
                <li><a className="dropdown-item" href="#">Dinner</a></li>
                <li><a className="dropdown-item" href="#">Drinks</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
            </li>
        </ul>
        </nav>
    )

}

