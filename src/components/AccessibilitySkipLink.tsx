
const AccessibilitySkipLink = () => {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      tabIndex={0}
    >
      Saltar al contenido principal
    </a>
  );
};

export default AccessibilitySkipLink;
