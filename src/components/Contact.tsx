import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal(0.2);

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [toastVisible, setToastVisible] = useState(false);
  const [toastData, setToastData] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  const [modalOpen, setModalOpen] = useState(false);

  // Auto-hide toast
  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 2000);
    return () => clearTimeout(t);
  }, [toastVisible]);

  // FRONTEND ONLY — No backend, just UI
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setToastData({ type: "error", msg: "Please fill all required fields" });
      setToastVisible(true);
      return;
    }

    // Success UI only
    setToastData({ type: "success", msg: "Form submitted (UI only)" });
    setToastVisible(true);
    setModalOpen(true);

    // Reset form
    setForm({ name: "", email: "", organization: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@vyomgarud.com",
      href: "mailto:contact@vyomgarud.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8881444693",
      href: "tel:+918881444693",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 blur-3xl rounded-full animate-pulse" />

      {/* Toast */}
      {toastData && (
        <div
          className={`fixed top-6 right-6 z-[9999] px-5 py-3 rounded-lg shadow-xl text-white transition-all duration-200 transform
            ${toastVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
            ${toastData.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toastData.msg}
        </div>
      )}

      {/* Success Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[9998] flex justify-center items-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl animate-scale-in">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Message Submitted!</h3>
            <p className="text-gray-600 mb-6">This is a demo — no backend connected.</p>
            <Button className="bg-primary text-white w-full" onClick={() => setModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div ref={formRef} className={`text-center mb-16 reveal ${formVisible ? "active" : ""}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reach out for partnerships, support, or general inquiries.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side info */}
          <div className={`space-y-8 reveal-left ${formVisible ? "active" : ""}`}>
            <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>

            <p className="text-muted-foreground leading-relaxed">
              We're always ready to help with UAV solutions and support.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 glass p-6 rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="bg-primary/20 p-4 rounded-lg">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`glass p-8 rounded-2xl reveal-right ${formVisible ? "active" : ""}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

              <Input placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

              <Input placeholder="Organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />

              <Textarea rows={5} placeholder="Your Message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

              <Button className="w-full bg-primary text-white py-6" type="submit">
                <Send className="w-5 h-5 mr-2" /> Submit (Frontend Only)
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
