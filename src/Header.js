import "./Header.css";

function Header() {
  return (
    <header className='Header'>
      <img
        src='logo.png'
        className='Header-logo'
        alt='logo'
        style={{ width: "100px", height: "100px" }}
      />
      <h1>Mesmereyes Accessible Gallery of Interactive Creations</h1>
      <h2>art to play with</h2>
    </header>
  );
}

export default Header;
