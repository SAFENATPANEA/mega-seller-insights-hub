import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const navigate = useNavigate();

  const categories = [
    'Todos',
    'Gestión de Inventario',
    'Atención al Cliente',
    'Análisis de Datos',
    'Marketing Retail',
    'Tecnología POS'
  ];

  const featuredArticle = {
    title: "5 Estrategias para Optimizar tu Inventario y Reducir Costos",
    excerpt: "Descubre cómo una gestión inteligente del inventario puede transformar la rentabilidad de tu negocio. Aprende técnicas probadas que utilizan los retailers más exitosos.",
    author: "María González",
    date: "15 Dic 2024",
    readTime: "8 min lectura",
    image: "/lovable-uploads/e9615d23-b2e8-44d5-b037-30d58e0a1c7b.png"
  };

  const blogPosts = [
    {
      title: "Cómo Fidelizar Clientes con un Sistema POS Inteligente",
      excerpt: "Los datos de tus clientes son oro puro. Te mostramos cómo usar tu sistema POS para crear experiencias personalizadas que generen lealtad verdadera.",
      author: "Carlos Mendoza",
      date: "12 Dic 2024",
      readTime: "6 min",
      category: "Atención al Cliente",
      image: "/lovable-uploads/b75fd21c-52d4-4ac8-907e-922782fb3614.png",
      slug: "/articulo/fidelizar-clientes-pos-inteligente"
    },
    {
      title: "Análisis de Ventas: KPIs que Todo Dueño de Negocio Debe Conocer",
      excerpt: "No todos los números son iguales. Identifica las métricas que realmente importan para tomar decisiones estratégicas que impulsen tu crecimiento.",
      author: "Ana Torres",
      date: "10 Dic 2024",
      readTime: "10 min",
      category: "Análisis de Datos",
      image: "/lovable-uploads/kpi.png",
      slug: "/articulo/analisis-ventas-kpis-negocio"
    },
    {
      title: "Gestión de Productos: Del Caos al Control Total",
      excerpt: "Organiza tu catálogo de productos como un profesional. Categorización, precios dinámicos y control de stock que te ahorrarán horas cada semana.",
      author: "Roberto Silva",
      date: "8 Dic 2024",
      readTime: "7 min",
      category: "Gestión de Inventario",
      image: "/lovable-uploads/661c74a8-8b39-4eb9-9aa9-497448c101f1.png",
      slug: "/articulo/gestion-productos-caos-control-total"
    },
    {
      title: "Marketing en el Punto de Venta: Convierte Visitas en Ventas",
      excerpt: "Tu tienda física es tu mejor vendedor. Aprende técnicas de merchandising y promociones que aumentarán tu ticket promedio inmediatamente.",
      author: "Laura Vásquez",
      date: "5 Dic 2024",
      readTime: "9 min",
      category: "Marketing Retail",
      slug: ""
    },
    {
      title: "Seguridad en Sistemas POS: Protege tu Negocio y tus Clientes",
      excerpt: "Los ciberataques a pequeños negocios van en aumento. Te mostramos cómo proteger tu sistema POS y mantener segura la información de tus clientes.",
      author: "Miguel Herrera",
      date: "3 Dic 2024",
      readTime: "12 min",
      category: "Tecnología POS",
      slug: ""
    },
    {
      title: "Inventario Estacional: Planifica como los Grandes Retailers",
      excerpt: "Las temporadas altas y bajas no tienen que ser una sorpresa. Aprende a planificar tu inventario basado en patrones históricos y tendencias del mercado.",
      author: "Sofia Ramírez",
      date: "1 Dic 2024",
      readTime: "8 min",
      category: "Gestión de Inventario",
      slug: ""
    }
  ];

  const handleBlogCardClick = (slug: string) => {
    if (slug) {
      navigate(slug);
    } else {
      console.log('Artículo próximamente disponible');
    }
  };

  const filteredPosts = activeCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            Blog MegaSeller
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Consejos expertos, estrategias probadas y las mejores prácticas para 
            hacer crecer tu negocio con tecnología inteligente.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article */}
        <FeaturedArticle {...featuredArticle} />

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                image={post.image}
                onClick={() => handleBlogCardClick(post.slug)}
              />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
