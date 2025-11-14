const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-foreground">Achal Pednekar</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">
            Crafting musical experiences that resonate with the soul
          </p>
          
          <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
            <span>© 2025 Achal Pednekar</span>
            <span>•</span>
            <span>All rights reserved</span>
            <span>•</span>
            <span>Made with ♫ for music</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;