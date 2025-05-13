import React, { useState } from 'react';
import { Clock, Phone, MapPin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   city: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // });

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceid = 'service_sg2oqil';
    const templateid = 'template_wcbz6fk';
    const publickey = 'hW6JGWdHLAouiHhwS';

    const form = {
      name: name,
      city: city,
      email: email,
      phone: phone,
      message: message
    }

    emailjs.send(serviceid, templateid, form, publickey).then(() => {
      console.log(form);
      alert('Message sent successfully!');

      toast.success('Message sent successfully!', {
        autoClose: 3000,
        hideProgressBar: true,
        theme: 'light',
      });

      setName('');
      setCity('');
      setEmail('');
      setPhone('');
      setMessage('');

    }).catch((error) => {
      alert('Failed to send message');
      console.log('Error:', error);
    });
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center text-sm text-stone-500">
          <a href="/" className="hover:text-stone-800">Home</a>
          <span className="mx-2">/</span>
          <span className="text-stone-800">Contact</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Contact</h1>
        <p className="text-xl text-stone-600">We'd Love to Hear from You</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm">
          {/* Contact Info */}
          <div className="lg:col-span-4 bg-[#A87852] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-white/80">St. Al Quoz - Al Quoz Industrial Area 4 - Dubai</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-white/80">Mon-Sat: 9am - 6pm</p>
                  <p className="text-white/80">Sun: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+971 502964292">
                    <p className="text-white/80">+971 502964292</p>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:rahtusinterior@gmail.com">

                    <p className="text-white/80">rahtusinterior@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={formData.name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#A6917C] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-medium text-stone-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  // value={formData.city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#A6917C] focus:border-transparent"
                  placeholder="Bahrain"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={formData.email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#A6917C] focus:border-transparent"
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  // value={formData.phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#A6917C] focus:border-transparent"
                  placeholder="+97112345789"
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  // value={formData.message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#A6917C] focus:border-transparent"
                  placeholder="Hello! I have a query regarding..."
                  required
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#A6917C] text-white rounded-full hover:bg-[#95806C] transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 rounded-lg overflow-hidden h-[400px]">
          <img
            src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Location Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;