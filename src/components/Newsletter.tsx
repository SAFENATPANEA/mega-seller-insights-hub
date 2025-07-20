import { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle } from 'lucide-react'; // Importamos nuevos iconos

const Newsletter = () => {
  // TU URL DEL WORKER - ¡CAMBIA ESTO!
  const WORKER_URL = import.meta.env.VITE_WORKER_URL || 'https://mailer-worker.centralguigue5983.workers.dev';

  const [email, setEmail] = useState('');
  // Estado más robusto para manejar la UI: 'idle', 'loading', 'success', 'error'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch(`${WORKER_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Si el worker devuelve un error (ej. email inválido), lo mostramos
        throw new Error(data.message || 'Ocurrió un error. Inténtalo de nuevo.');
      }

      // Si todo sale bien
      setStatus('success');
      setFeedbackMessage(data.message || '¡Gracias por suscribirte!');
      setEmail('');

    } catch (error: unknown) {
      setStatus('error');
      if (error instanceof Error) {
        setFeedbackMessage(error.message);
      } else {
        setFeedbackMessage('Ocurrió un error. Inténtalo de nuevo.');
      }
    }

    // Reseteamos el formulario después de 4 segundos para que se pueda usar de nuevo
    setTimeout(() => {
      setStatus('idle');
    }, 4000);
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
          
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-4 py-3 corner-medium border-0 text-gray-900 placeholder-gray-500"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gray-900 corner-medium font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                disabled={status === 'loading'}
              >
                {status === 'loading' 
                  ? <Loader2 className="animate-spin" /> 
                  : <><span>Suscribirse</span><Send size={18} /></>
                }
              </button>
            </form>
          ) : (
            <div className="text-lg font-medium flex items-center justify-center gap-2">
              <CheckCircle /> {feedbackMessage}
            </div>
          )}

          {status === 'error' && (
            <p className="mt-4 text-yellow-300">{feedbackMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;