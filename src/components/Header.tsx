// import '../css/header.css'
import snailLogo from '../assets/snail-logo.png'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Snail</a>
        <img src={snailLogo} alt="snail-logo" width="40" height="35"></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Sản Phẩm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Khuyến Mãi</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cửa Hàng
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">2 Nguyễn Văn Khối, phường 1, Gò Vấp, TP HCM</a></li>
                <li><a className="dropdown-item" href="#">156 Nguyễn Kiệm, phường 3, Gò Vấp, TP HCM</a></li>
                <li><a className="dropdown-item" href="#">67 Trường Sơn, phường 12, Tân Bình TP HCM</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">Liên Hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
