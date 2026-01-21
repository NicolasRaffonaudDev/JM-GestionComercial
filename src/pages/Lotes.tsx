import { useState, useEffect } from 'react';
import type { Lote } from '../types/interfaces';  // Consistente con type import
import LotCard from '../components/LotCard/LotCard';  // Ajusta path si es /LotCard/LotCard (quita subfolder si no)

const Lotes: React.FC = () => {
  const [lotes, setLotes] = useState<Lote[]>([]);  // Data de API (inicial vacío)
  const [loading, setLoading] = useState(true);  // Loading para UX
  const [filtroPrecio, setFiltroPrecio] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);  // Multi-select

  useEffect(() => {
    fetch('http://localhost:3001/lotes')  // Puerto de back-end
      .then(res => {
        if (!res.ok) throw new Error('Fetch error');  // Manejo básico errores (agregado para robustez)
        return res.json();
      })
      .then(data => {
        setLotes(data);  // Set data de API
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching lotes:', err);
        setLoading(false);  // Muestra error UX si quieres: Agrega state error
      });
  }, []);  // Carga solo una vez

  if (loading) return <p className="text-center text-earth-brown">Cargando lotes...</p>;  // Simple spinner (puedes agregar icono)

  // Todas amenities únicas de LOTES (no mock – usa data cargada)
  const allAmenities = Array.from(new Set(lotes.flatMap(lote => lote.amenities)));  // Cambiado a lotes

  // Filtered con LOTES (no mock)
  const filteredLotes: Lote[] = lotes
    .filter(lote => lote.price >= filtroPrecio)
    .filter(lote => selectedAmenities.every(amenity => lote.amenities.includes(amenity)));

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );  // Toggle igual
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">  // Fondo neutro para contraste
      <h1 className="text-3xl font-bold text-center mb-4 text-primary-green">Nuestros Lotes Disponibles</h1>
      <div className="max-w-md mx-auto mb-6">
        <label htmlFor="precio-min" className="block text-earth-brown">Filtro Precio Mínimo (USD):</label>
        <input
          id="precio-min"
          type="number"
          value={filtroPrecio}
          onChange={(e) => setFiltroPrecio(Number(e.target.value) || 0)}  // Manejo NaN
          placeholder="Ej: 40000"
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="max-w-md mx-auto mb-6">
        <label className="block text-earth-brown">Filtrar por Amenities:</label>
        {allAmenities.map(amenity => (
          <div key={amenity}>
            <input
              type="checkbox"
              id={amenity}
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleAmenityChange(amenity)}
            />
            <label htmlFor={amenity}>{amenity}</label>
          </div>
        ))}
      </div>
      {filteredLotes.length === 0 ? (
        <p className="text-center text-red-500">No hay lotes que coincidan.</p>  // Empty state
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