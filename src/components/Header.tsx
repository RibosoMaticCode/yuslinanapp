export default function Header() {
  return (
    <header id="header" className="alt">
      <h1>
        <a href="index.html">Yuslinan</a>
      </h1>
      <nav id="nav">
        <ul>
          <li className="special">
            <a href="#menu" className="menuToggle">
              <span>Menu</span>
            </a>
            <div id="menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
