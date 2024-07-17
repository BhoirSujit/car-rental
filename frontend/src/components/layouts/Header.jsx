import '../../assets/styles/header.css'

export default function Home () {
    return (
        <header className="header">
            <nav className='nav'>
            <div className="logo">
                <span>RentCar</span>
            </div>
            <div className="han">
                <ul>
                    <li><a href="/" className="han-link">Home</a></li>
                    <li><a href="/carlist" className="han-link">Car List</a></li>
                    <li><a href="/about" className="han-link">About us</a></li>
                    <li><a href="/contact" className="han-link">Contact</a></li>
                </ul>
            </div>
            <div className="tail">
                <button className="login-btn">Login/Register</button>
            </div>
            </nav>
            
        </header>
    );
}