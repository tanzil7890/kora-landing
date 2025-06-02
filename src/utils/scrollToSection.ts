export const scrollToSection = (href: string) => {
  // Remove the leading slash and hash if present (e.g., "/#features" -> "features")
  const sectionId = href.replace(/^\/#/, '');
  
  const element = document.getElementById(sectionId);
  
  if (element) {
    const headerHeight = 72; // Height of the fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 