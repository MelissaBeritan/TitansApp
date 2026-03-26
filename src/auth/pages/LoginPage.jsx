import { useNavigate } from "react-router-dom"

export function LoginPage() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/');
  }
  return (
    <>
      <div>
        <h2>Login</h2>
        <button onClick={onLogin}>Login</button>
        </div>
    </>
  )
}
