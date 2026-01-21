const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());  // Permite requests de front (localhost:5173)
app.use(express.json());

const lotes = [  // Copia array de data.ts
  { id: 1, title: 'Lote Costero en Santa Teresita', price: 50000, size: 500, amenities: ['Cerca playa', 'Parrilla', 'Electricidad'], image: 'https://via.placeholder.com/300x200?text=Lote+1', lat: -34.6037, lng: -58.3816 },
  { id: 2, title: 'Terreno Rural en Buenos Aires', price: 30000, size: 800, amenities: ['Jardín amplio', 'Cochera'], image: 'https://via.placeholder.com/300x200?text=Lote+2', lat: -34.6037, lng: -58.3816 },
  { id: 3, title: 'Lote Urbano Premium', price: 70000, size: 400, amenities: ['Pileta', 'Seguridad 24h'], image: 'https://via.placeholder.com/300x200?text=Lote+3', lat: -34.6037, lng: -58.3816 },
  // ... resto
];

app.get('/lotes', (req, res) => res.json(lotes));  // GET all

app.listen(3001, () => console.log('Server on 3001'));  // Puerto 3001 para no conflict Vite