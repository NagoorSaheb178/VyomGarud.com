import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero.mp4';

const Hero = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Background video */}
        <video
          src={heroImage}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover parallax"
          style={{ transform: 'scale(1.1)' }}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-overlay z-10" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Title */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 transition-all duration-1500 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gradient animate-reveal-text">VyomGarud</span>
          </h1>

          <p
            className={`text-xl md:text-3xl text-foreground/90 mb-4 font-light transition-all duration-1500 delay-300 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Military-Grade UAV Systems
          </p>
<p
  className={`text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 transition-all duration-1500 delay-500 ${
    titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  Precision engineering meets advanced autonomy. We deliver cutting-edge drone
  technology for defense, surveillance, and mission-critical operations.
</p>


          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1500 delay-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white glow px-8 py-6 text-lg font-semibold">
              Explore Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1500 delay-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { value: '500+', label: 'Missions' },
              { value: '99.9%', label: 'Reliability' },
              { value: '24/7', label: 'Support' },
              { value: '50+', label: 'Countries' },
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
