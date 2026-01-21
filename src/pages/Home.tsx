import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-earth-brown text-white p-8 text-center"> {/* Hero custom */}
        <h1 className="text-4xl">Gestión Comercial de Lotes</h1>
        <p className="text-xl">Encuentra tu terreno ideal en Argentina. Explora ahora!</p>
        <button className="bg-primary-green px-4 py-2 mt-4">
          <Link to="/lotes">Ver Lotes</Link>
        </button>
      </div>
      {/* Agrega más sections */}
    </div>
  );
};

export default Home;