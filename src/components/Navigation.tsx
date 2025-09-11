import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import inshaLogo from '@/assets/insha-logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-beige shadow-gentle sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={inshaLogo} 
              alt="InSha Hajj & Umrah Group" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-sapphire transition-colors font-body">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-sapphire transition-colors font-body">
                <span>Umrah</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Super Saver Umrah</DropdownMenuItem>
                <DropdownMenuItem>Economy Umrah</DropdownMenuItem>
                <DropdownMenuItem>Standard Umrah</DropdownMenuItem>
                <DropdownMenuItem>Premium Umrah</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-sapphire transition-colors font-body">
                <span>Hajj</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Economy Hajj</DropdownMenuItem>
                <DropdownMenuItem>Standard Hajj</DropdownMenuItem>
                <DropdownMenuItem>Premium Hajj</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/packages" className="text-foreground hover:text-sapphire transition-colors font-body">
              Packages
            </a>
            <a href="/services" className="text-foreground hover:text-sapphire transition-colors font-body">
              Services
            </a>
            <a href="/about" className="text-foreground hover:text-sapphire transition-colors font-body">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-sapphire transition-colors font-body">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground font-body">
              <Phone className="w-4 h-4" />
              <span>01713-155200</span>
            </div>
            <Button variant="outline" size="sm" className="border-jade text-jade hover:bg-jade hover:text-white">
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-beige">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-sapphire transition-colors font-body">
                Home
              </a>
              <a href="/umrah" className="text-foreground hover:text-sapphire transition-colors font-body">
                Umrah
              </a>
              <a href="/hajj" className="text-foreground hover:text-sapphire transition-colors font-body">
                Hajj
              </a>
              <a href="/packages" className="text-foreground hover:text-sapphire transition-colors font-body">
                Packages
              </a>
              <a href="/services" className="text-foreground hover:text-sapphire transition-colors font-body">
                Services
              </a>
              <a href="/about" className="text-foreground hover:text-sapphire transition-colors font-body">
                About Us
              </a>
              <a href="/contact" className="text-foreground hover:text-sapphire transition-colors font-body">
                Contact
              </a>
              <div className="pt-4 border-t border-beige">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground font-body mb-2">
                  <Phone className="w-4 h-4" />
                  <span>01713-155200</span>
                </div>
                <Button variant="outline" size="sm" className="border-jade text-jade hover:bg-jade hover:text-white">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;