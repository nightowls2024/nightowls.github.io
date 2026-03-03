import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl sm:text-5xl text-primary text-glow-sm text-center mb-12">
          Find Us
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">Street No. 32, Block-RZ, Tughlakabad Extension, New Delhi 110019</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+919315636062" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  093156 36062
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground text-sm">Every day, 9:00 PM – 5:00 AM</p>
              </div>
            </div>

            <a
              href="https://wa.me/919315636062"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-gold text-primary-foreground font-semibold px-6 py-3 rounded-lg box-glow hover:opacity-90 transition-opacity mt-4"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <div className="rounded-lg overflow-hidden border-glow h-64 md:h-auto">
            <iframe
              title="Nightowls Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0!2d77.25!3d28.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzEyLjAiTiA3N8KwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
