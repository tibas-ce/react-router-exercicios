import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/coordinator";

function ProfilePage() {

  const navigate = useNavigate();

  return (
    <section>
      <h1>Página de perfil</h1>
      <button onClick={() => goToHome(navigate)} >Ir para página de inicial</button>
    </section>
  );
}

export default ProfilePage;
