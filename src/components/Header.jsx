const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
			<div className="container-fluid px-5 py-2">
				<a className="navbar-brand d-flex fs-4 fw-bold fst-italic gap-3 align-items-center" href="#">
					<img src="../../public/logo.png" alt="√" width={160} height={160} style={{ width: "45px", height: "45px" }} />
					Soc effective
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="ms-auto navbar-nav gap-3">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Assignment
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Results
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-disabled="true">
								How to
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-disabled="true">
								Contact Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-disabled="true">
								Login
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
