import { useState } from 'react';
import { FileText, Sparkles, Mail, CheckCircle } from 'lucide-react';
import { supabase, type CustomOrder } from '../lib/supabase';

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState<CustomOrder>({
    occasion: '',
    recipient: '',
    message: '',
    color_preferences: '',
    photo_url: '',
    customer_name: '',
    customer_email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from('custom_orders').insert([formData]);

    if (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } else {
      setSubmitMessage('Thank you! We\'ll be in touch within 24 hours to discuss your design.');
      setFormData({
        occasion: '',
        recipient: '',
        message: '',
        color_preferences: '',
        photo_url: '',
        customer_name: '',
        customer_email: '',
      });
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-gradient-to-br from-rose-50 to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-4">
            Order Something Personal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? We'd love to create something bespoke,
            designed especially for your special occasion.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12">
          <h2 className="font-serif text-3xl text-gray-900 mb-8 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">1. Tell us your vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill in the form below with details about the occasion, recipient, and any ideas
                you have in mind.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">2. We design and confirm</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll create a bespoke design and send you a preview. Make any tweaks until it's
                perfect.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">3. Posted to your door</h3>
              <p className="text-gray-600 leading-relaxed">
                Once you're happy, we'll craft your card or print by hand and post it within 3-5
                working days.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl text-gray-900 mb-8">Your custom order</h2>

          {submitMessage && (
            <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-emerald-800">{submitMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                  What's the occasion?
                </label>
                <input
                  type="text"
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Birthday, Wedding, Anniversary"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">
                  Who is it for?
                </label>
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleChange}
                  required
                  placeholder="e.g., My sister Sarah"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message or wording
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us what you'd like the card to say, or describe the sentiment you want to capture..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="color_preferences"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Colour preferences
              </label>
              <input
                type="text"
                id="color_preferences"
                name="color_preferences"
                value={formData.color_preferences}
                onChange={handleChange}
                placeholder="e.g., Pastels, bright and bold, earth tones (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="photo_url" className="block text-sm font-medium text-gray-700 mb-2">
                Photo or image (optional)
              </label>
              <input
                type="url"
                id="photo_url"
                name="photo_url"
                value={formData.photo_url}
                onChange={handleChange}
                placeholder="Paste a link to an image for inspiration"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-gray-500">
                If you have a photo or design inspiration, paste a link here or email it to us
                after submitting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="customer_name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="customer_name"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="customer_email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="customer_email"
                  name="customer_email"
                  value={formData.customer_email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 bg-rose-400 text-white font-medium rounded-full hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Order Request'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Have questions?{' '}
            <a href="mailto:hello@heartfeltpaperco.com" className="text-rose-400 hover:text-rose-500">
              Email us
            </a>{' '}
            and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
