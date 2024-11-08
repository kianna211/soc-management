import { Link, useLocation } from "react-router-dom";

const menuItems = {
	Home: "/",
	Assessment: "/assess",
	Results: "/result",
	"How to": "/guide",
	"Contact Us": "/contact",
};

const Header = () => {
	const location = useLocation();

	return (
		<nav className="navbar navbar-expand-lg bg-main shadow-sm">
			<div className="container-fluid px-5 py-2">
				<Link className="navbar-brand d-flex fs-4 fw-bold fst-italic gap-3 align-items-center" to="/">
					<img src="/logo.png" alt="√" width={160} height={160} style={{ width: "45px", height: "45px" }} />
					Soc effective
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="ms-auto navbar-nav gap-3 align-items-center">
						{Object.keys(menuItems).map((item, index) => (
							<li className={`nav-item ${location.pathname === menuItems[item] ? "active" : ""}`} key={index}>
								<Link
									className={`nav-link ${location.pathname === menuItems[item] ? "active" : ""}`}
									aria-current={location.pathname === menuItems[item] ? "page" : undefined}
									to={".." + menuItems[item]}
								>
									{item}
								</Link>
							</li>
						))}
						<li className="nav-item d-flex gap-0">
							<Link className="nav-link" to="/auth">
								<button className={`btn py-2 px-3 ${location.pathname == "/auth" ? "btn-primary" : "btn-outline-primary"}`}>Get Started</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
