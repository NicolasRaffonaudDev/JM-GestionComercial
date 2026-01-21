import type { Lote } from "../../types/interfaces";
import MapView from "../MapView/MapView";

interface LotCardProps {
    lote: Lote;
}

const LotCard: React.FC<LotCardProps> = ({ lote }) => {
    return (
        <div>
            <div className="bg-beige p-4 rounded shadow-md hover:shadow-lg transition">  // Tailwind: Hover para interactividad
                <img src={lote.image} alt={lote.title} className="w-full h-48 object-cover rounded-t" />  // A11y: alt text
                <h2 className="text-xl font-bold text-earth-brown">{lote.title}</h2>
                <p className="text-primary-green">Precio: ${lote.price.toLocaleString('es-AR')} USD</p>  // Formato local ARG
                <p>Tamaño: {lote.size} m²</p>
                <ul className="list-disc pl-5">
                    {lote.amenities.map((a) => <li key={a}>{a}</li>)}
                </ul>
            </div>
            <MapView lote={lote} />
        </div>
    );
};

export default LotCard;
