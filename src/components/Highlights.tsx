import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import { Clock, Award, Globe } from "lucide-react";

const Highlights = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15);

  const [counters, setCounters] = useState({
    missions: 0,
    uptime: 0,
    countries: 0,
  });

  // Smooth counter animation (easing)
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endValues = { missions: 500, uptime: 99.9, countries: 50 };
    const duration = 1800;
    const stepTime = 15;

    const timer = setInterval(() => {
      start += stepTime;
      const progress = Math.min(start / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      setCounters({
        missions: Math.floor(endValues.missions * ease),
        uptime: parseFloat((endValues.uptime * ease).toFixed(1)),
        countries: Math.floor(endValues.countries * ease),
      });

      if (progress >= 1) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const highlights = [
    {
      icon: Clock,
      value: `${counters.missions}+`,
      label: "Successful Missions",
      desc: "Proven track record across defense and surveillance operations",
    },
    {
      icon: Award,
      value: `${counters.uptime}%`,
      label: "System Uptime",
      desc: "Industry-leading reliability in mission-critical environments",
    },
    {
      icon: Globe,
      value: `${counters.countries}+`,
      label: "Countries Served",
      desc: "Global presence with unmatched operational support",
    },
  ];

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background via-background to-black/10 overflow-hidden"
    >
      {/* Soft glowing background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Why Choose <span className="text-gradient">VyomGarud</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Numbers that showcase our commitment to precision, durability, and innovation.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`glass p-10 rounded-3xl shadow-xl border border-white/10 
              backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl 
              reveal-scale ${isVisible ? "active" : ""}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="bg-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Value */}
              <h3 className="text-5xl font-extrabold text-gradient mb-2">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-xl font-semibold text-foreground mb-3">
                {item.label}
              </p>

              {/* Description */}
              <p className="text-muted-foreground">{item.desc}</p>

              {/* Line */}
              <div className="mt-6 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div
          className={`mt-20 grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            "🔒 End-to-End Military Encryption",
            "🛡️ Hardened Defense-Grade Hardware",
            "🌐 Worldwide Support Network",
            "⚡ Ultra-Fast Real-Time Processing",
            "🎯 Precision Autonomous Navigation",
            "🔄 Continuous Over-Air Updates",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-secondary p-5 rounded-xl shadow-sm hover:bg-primary/10 transition-all duration-300"
            >
              <span className="text-3xl">{feature.split(" ")[0]}</span>
              <span className="text-lg text-foreground font-medium">
                {feature.substring(feature.indexOf(" ") + 1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
