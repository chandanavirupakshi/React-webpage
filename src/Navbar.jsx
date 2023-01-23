import './style.css';
export default function Navbar(){
    return (
        <nav className="nav">
            <a href="/" className="site-title">SiteName</a>
            <ul>
                <li>
                    <a href="/pricing">pricing</a>
                    </li>
                    <li>
                    <a href="/about">About Us</a> 
                </li>
            </ul>
        </nav>

    );
        
    
}