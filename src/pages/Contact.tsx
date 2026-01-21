import {useState} from 'react'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [errors, setErrors] = useState({name: '', email: '', message: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let valid = true;
        const newErrors = {name: '', email: '', message: ''};
        if (!formData.name.trim()) {newErrors.name = 'Nombre requerido'; valid = false; }
        if (!formData.email.includes('@')) {newErrors.email = 'Email invalido'; valid = false; }
        if (!formData.message.trim()) {newErrors.message = 'Mensaje requerido'; valid = false; }
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form enviado', formData);
            alert('Mensaje enviado!');
            setFormData({name: '', email: '', message: '',})
        }
    }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-beige rounded shadow-md">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="border p-2 mb-2 w-full rounded" />
      {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 mb-2 w-full rounded" />
      {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" className="border p-2 mb-2 w-full rounded h-24" />
      {errors.message && <p className="text-red-500 mb-2">{errors.message}</p>}
      <button type="submit" className="bg-primary-green text-white p-2 rounded w-full">Enviar</button>
    </form>
  );
};

export default Contact