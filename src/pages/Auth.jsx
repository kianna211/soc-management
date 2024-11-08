import { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
	const [isNew, setIsNew] = useState(false);
	return (
		<div className="container d-flex justify-content-center pt-5">
			<div className="position-relative row mt-5 text-bg-info rounded-3 py-5" style={{ minWidth: "1000px", height: "300px" }}>
				<div className="col-6 d-flex flex-column gap-3 align-items-center justify-content-center transition" style={{ opacity: isNew ? 0 : 1 }}>
					<h2>Have an account?</h2>
					<input type="button" name="active-log-panel" className="btn btn-primary text-white" id="log-login-show" value="Login" onClick={() => setIsNew(true)} />
				</div>

				<div className="col-6 d-flex flex-column gap-3 align-items-center justify-content-center transition" style={{ opacity: isNew ? 1 : 0 }}>
					<h2>Don't have an account?</h2>
					<input type="button" name="active-log-panel" className="btn btn-primary text-white" id="log-login-show" value="Sign Up" onClick={() => setIsNew(false)} />
				</div>

				<div className="rounded-3 p-4 position-absolute form-dlg transition text-bg-secondary" style={{ left: isNew ? "4%" : "50%" }}>
					<div className={`d-flex flex-column justify-content-between h-100 ${isNew ? "d-block" : "d-none"}`}>
						<h2 className="text-center border-bottom border-primary py-2">Login</h2>
						<input type="text" className="form-control" placeholder="Email" />
						<input type="password" className="form-control" placeholder="Password" />
						<div className="d-flex py-1">
							<input type="checkbox" id="remember" className="me-2" />
							<label htmlFor="remember">Remember me</label>
							<Link to="#" className="ms-auto text-white">
								Forget Password
							</Link>
						</div>
						<input type="button" className="btn btn-primary" value="Login" />
					</div>
					<div className={`d-flex flex-column justify-content-between h-100 ${isNew ? "d-none" : "d-block"}`}>
						<h2 className="text-center border-bottom border-primary py-2">REGISTER</h2>
						<input type="text" className="form-control" placeholder="Email" />
						<input type="password" className="form-control" placeholder="Password" />
						<input type="password" className="form-control" placeholder="Confirm Password" />
						<input type="button" className="btn btn-primary" value="Register" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
