import { useNavigate } from "react-router-dom";
import { goToProfile } from "../routes/coordinator";

function HomePage() {

  const navigate = useNavigate();

  return (
    <section>
      <h1>Página inicial</h1>
      <button onClick={() => goToProfile(navigate)}>Ir para página perfil</button>
    </section>
  );
}

export default HomePage;
