interface SectionSeparatorProps {
  className?: string;
  opacity?: 'light' | 'medium' | 'strong';
}

const SectionSeparator = ({ className = '', opacity = 'medium' }: SectionSeparatorProps) => {
  const opacityClasses = {
    light: 'border-white/10',
    medium: 'border-white/20',
    strong: 'border-white/30'
  };

  return (
    <div className={`border-t ${opacityClasses[opacity]} ${className}`}></div>
  );
};

export default SectionSeparator;