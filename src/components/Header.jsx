import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
			<div className="container-fluid px-5 py-2">
				<Link className="navbar-brand d-flex fs-4 fw-bold fst-italic gap-3 align-items-center" to="/">
					<img src="../../public/logo.png" alt="√" width={160} height={160} style={{ width: "45px", height: "45px" }} />
					Soc effective
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="ms-auto navbar-nav gap-3 align-items-center">
						<div className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link" to="/assess">
								Assessment
							</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link" to="/results">
								Results
							</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link" to="/guide">
								How to
							</Link>
						</div>
						<div className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact Us
							</Link>
						</div>
						<div className="nav-item d-flex gap-0">
							<Link className="nav-link" to="/login">
								<button className="btn btn-outline-success text-white">Login</button>
							</Link>
							<Link className="nav-link" to="/signup">
								<button className="btn btn-outline-success text-white">Sign Up</button>
							</Link>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
