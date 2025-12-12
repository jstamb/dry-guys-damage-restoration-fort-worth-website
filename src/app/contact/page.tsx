import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us for 24/7 Restoration Services in Fort Worth',
  description: 'Contact Dry Guys Damage Restoration in Fort Worth for immediate assistance. Call 555-555-5555, email us, or fill out our form. We serve the entire Fort Worth area.',
};

const ContactForm = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" className="input mt-1" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" name="email" className="input mt-1" />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
      <input type="tel" id="phone" name="phone" className="input mt-1" />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
      <textarea id="message" name="message" rows={5} className="input mt-1"></textarea>
    </div>
    <button type="submit" className="btn btn-primary w-full">Send Message</button>
  </form>
);

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-2">We're here to help 24/7. Reach out for immediate assistance.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Business Information</h2>
            <div className="space-y-4 text-lg">
              <p><strong>Business:</strong> Dry Guys Damage Restoration Fort Worth</p>
              <p><strong>Phone:</strong> <a href="tel:555-555-5555" className="phone-link">555-555-5555</a></p>
              <p><strong>Address:</strong> 123 Main St, Fort Worth, TX 76102 (By Appointment)</p>
              <p><strong>Hours:</strong> 24/7 Emergency Service</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Our Service Area</h3>
              <p className="text-gray-700">We proudly serve the entire Fort Worth metro area and surrounding communities. If you're unsure if we service your location, please give us a call!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}