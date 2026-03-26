import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const onLogin = () => {
    console.log(password, ' ', userName);
    navigate('/');

  }
  return (
    <>
        <h2>Login</h2>
        <form>
          <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Nombre de usuario" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Contraseña"/>
          <button onClick={onLogin} type="submit">Login</button>
        </form>
        
    </>
  )
}
