import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Target, Zap } from 'lucide-react';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 reveal ${titleVisible ? 'active' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">VyomGarud</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center reveal-scale ${
            contentVisible ? 'active' : ''
          }`}
        >
          {/* Left: Mission Statement */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Redefining Aerial Excellence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VyomGarud is at the forefront of unmanned aerial vehicle technology, delivering
              military-grade systems that combine precision engineering with advanced autonomy.
              Our mission is to empower defense and security operations with reliable,
              cutting-edge drone solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From surveillance to reconnaissance, our UAV systems are designed to excel in the
              most demanding environments. We are committed to innovation, reliability, and
              excellence in every mission.
            </p>

            {/* Core Values */}
            <div className="grid gap-6 mt-8">
              {[
                {
                  icon: Shield,
                  title: 'Military-Grade Security',
                  desc: 'Encrypted communications and tamper-proof systems',
                },
                {
                  icon: Target,
                  title: 'Precision Engineering',
                  desc: 'Sub-millimeter accuracy in critical operations',
                },
                {
                  icon: Zap,
                  title: 'Advanced Autonomy',
                  desc: 'AI-powered navigation and decision-making',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 glass p-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual/Stats */}
          <div className="relative">
            <div className="glass p-8 rounded-2xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-gradient mb-4">10+</div>
                  <p className="text-muted-foreground">Years of Innovation</p>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-lg mb-4 text-center">Technology Stack</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'AI Navigation',
                      '4K Imaging',
                      'Thermal Sensors',
                      'Encrypted Comms',
                      'Autonomous Flight',
                      'Real-time Telemetry',
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="bg-secondary p-3 rounded-lg text-center text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6 text-center">
                  <p className="text-muted-foreground text-sm italic">
                    "Where precision meets the sky, missions become reality."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
