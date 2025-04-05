import snailLogo from "../../assets/snail-logo-black.png";

function Header() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-header">
        <a className="navbar-brand" href="#">
          <img src={snailLogo} alt="snail-logo" width="55" height="50"></img>
        </a>
        <span className="h4 mt-auto">SNAIL</span>
      </div>
      <nav className="navbar my-nav-header navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler me-auto border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list h3"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Sản Phẩm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Khuyến Mãi
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cửa Hàng
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      2 Nguyễn Văn Khối, phường 1, Gò Vấp, TP HCM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      156 Nguyễn Kiệm, phường 3, Gò Vấp, TP HCM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      67 Trường Sơn, phường 12, Tân Bình TP HCM
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Liên Hệ</a>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <a className="nav-link ms-auto me-3" aria-current="page" href="/">
              <i className="bi bi-person-circle h4"></i>
              <span className="d-none d-md-inline">Đăng Nhập</span>
            </a>
            <a className="nav-link ms-auto">
              <span>0</span>
              <i className="bi bi-bag-heart h4"></i>
              <span className="d-none d-md-inline">Giỏ Hàng</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
