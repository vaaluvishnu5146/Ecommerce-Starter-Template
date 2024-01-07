export default function LoginCard({ handleLogin = () => {} }) {
  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address or Phone
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com or +91XXXXXXXXX"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="**************"
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
