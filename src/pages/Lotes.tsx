import { useState } from 'react';
import LotCard from '../components/LotCard/LotCard';
import { mockLotes } from '../utils/data';
import type { Lote } from '../types/interfaces';

const Lotes: React.FC = () => {
  const [filtroPrecio, setFiltroPrecio] = useState(0);

  const filteredLotes: Lote[] = mockLotes.filter((lote) => lote.price >= filtroPrecio);  // Lógica filtro – simple y eficiente

  return (
    <div className="p-4 bg-gray-100 min-h-screen">  // Fondo neutro para contraste
      <h1 className="text-3xl font-bold text-center mb-4 text-primary-green">Nuestros Lotes Disponibles</h1>
      <div className="max-w-md mx-auto mb-6">
        <label htmlFor="precio-min" className="block text-earth-brown">Filtro Precio Mínimo (USD):</label>
        <input
          id="precio-min"
          type="number"
          value={filtroPrecio}
          onChange={(e) => setFiltroPrecio(Number(e.target.value) || 0)}  // Manejo errores (no NaN)
          placeholder="Ej: 40000"
          className="w-full border p-2 rounded"
        />  // Accesible: Label + ID
      </div>
      {filteredLotes.length === 0 ? (
        <p className="text-center text-red-500">No hay lotes que coincidan.</p>  // Empty state UX
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredLotes.map((lote) => (
            <LotCard key={lote.id} lote={lote} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lotes;