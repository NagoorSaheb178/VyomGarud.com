import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Radar, Camera, Shield, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import drone1 from '@/assets/drone-1.png';
import drone2 from '@/assets/drone-2.png';
import drone3 from '@/assets/drone-3.jpg';
import drone4 from '@/assets/drone-4.jpg';

const Capabilities = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.1);

  const capabilities = [
    {
      icon: Radar,
      title: 'Surveillance & Reconnaissance',
      description:
        'Advanced multi-spectrum surveillance systems with real-time data transmission and AI-powered threat detection.',
      image: drone1,
      features: ['360° Coverage', 'Night Vision', 'AI Detection'],
    },
    {
      icon: Camera,
      title: 'Tactical Imaging',
      description:
        'Military-grade 4K cameras with thermal imaging, allowing precision target identification in any environment.',
      image: drone2,
      features: ['4K Resolution', 'Thermal Imaging', 'Zoom 30x'],
    },
    {
      icon: Shield,
      title: 'Secure Communications',
      description:
        'End-to-end encrypted data links ensuring mission-critical information remains secure from interception.',
      image: drone3,
      features: ['AES-256', 'Anti-Jamming', 'Redundancy'],
    },
    {
      icon: Cpu,
      title: 'Autonomous Systems',
      description:
        'AI-driven autonomous flight capabilities with obstacle avoidance, waypoint navigation, and return-to-home safety.',
      image: drone4,
      features: ['AI Autopilot', 'Path Planning', 'Auto-RTH'],
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 reveal ${titleVisible ? 'active' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Military-grade technology engineered for mission-critical operations
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className={`group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden reveal-scale ${
                cardsVisible ? 'active' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 right-6 bg-primary/90 p-4 rounded-lg glow">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {capability.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 bg-secondary text-foreground text-sm font-medium rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
