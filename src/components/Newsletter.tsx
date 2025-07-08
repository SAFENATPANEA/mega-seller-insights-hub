
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="my-16">
      <div 
        className="corner-large p-8 text-center"
        style={{ 
          background: 'var(--md-sys-color-primary-gradient)',
          color: 'var(--md-sys-color-on-primary)'
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <Mail size={48} className="opacity-90" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">
            Mantente actualizado con MegaSeller
          </h3>
          
          <p className="text-lg mb-6 opacity-90">
            Recibe consejos semanales, estrategias de negocio y las últimas tendencias 
            del retail directamente en tu correo.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-4 py-3 corner-medium border-0 text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gray-900 corner-medium font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Suscribirse</span>
                <Send size={18} />
              </button>
            </form>
          ) : (
            <div className="text-lg font-medium">
              ¡Gracias por suscribirte! 📧
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
