import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 1. Hero Section: Introduction & Mission */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-primary dark:text-warning mb-4">
            Our Story: Nurturing Pets, Building Trust
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Warm Paws is dedicated to providing the highest quality care for
            your beloved animal companions. We believe every pet deserves to be
            treated like family.
          </p>
        </header>

        <hr className="mb-16 border-gray-200 dark:border-gray-700" />

        {/* 2. Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="card bg-base-100 dark:bg-gray-800 shadow-xl p-8 rounded-2xl border-t-4 border-primary transition duration-300 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              🌟 Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              To create a safe, joyful, and healthy environment for all pets,
              offering professional care, personalized attention, and peace of
              mind to their owners. We strive to be the most trusted name in pet
              care in our community.
            </p>
          </div>

          {/* Vision Card */}
          <div className="card bg-base-100 dark:bg-gray-800 shadow-xl p-8 rounded-2xl border-t-4 border-warning transition duration-300 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              🔭 Our Vision
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              To set the benchmark for ethical and excellent pet service,
              expanding our reach to help more animals live happier, healthier,
              and longer lives through innovative care techniques and deep
              compassion.
            </p>
          </div>
        </div>

        <hr className="mb-16 border-gray-200 dark:border-gray-700" />

        {/* 3. Core Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            🤝 Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Compassion */}
            <div className="text-center p-6 border rounded-xl dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <span className="text-5xl text-primary mb-3 block">💖</span>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Compassion
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Every interaction is guided by love, empathy, and respect for
                every animal's unique personality.
              </p>
            </div>
            {/* Value 2: Trust */}
            <div className="text-center p-6 border rounded-xl dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <span className="text-5xl text-warning mb-3 block">🔒</span>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Trust
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We maintain transparent communication and the highest ethical
                standards in all our services.
              </p>
            </div>
            {/* Value 3: Excellence */}
            <div className="text-center p-6 border rounded-xl dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <span className="text-5xl text-success mb-3 block">✨</span>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We are committed to continuous learning and delivering
                professional, top-tier pet care services.
              </p>
            </div>
          </div>
        </section>

        <hr className="mb-16 border-gray-200 dark:border-gray-700" />

        {/* 4. Meet Our Team (Placeholder) */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            🧑‍⚕️ Meet Our Dedicated Team
          </h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Our team of certified groomers, experienced sitters, and passionate
            animal lovers are the heart of Warm Paws. They bring expertise,
            kindness, and dedication to every service.
          </p>

          {/* Placeholder for Team Cards/Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="text-center p-4 bg-base-100 dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="avatar mx-auto mb-3">
                <div className="w-24 rounded-full border-4 border-warning/50">
                  <img src="https://i.ibb.co/vvZShx4b/unnamed.jpg" alt="" />
                </div>
              </div>
              <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                Dr. Ruma Akter
              </h5>
              <p className="text-sm text-primary">Lead Veterinarian</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center p-4 bg-base-100 dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="avatar mx-auto mb-3">
                <div className="w-24 rounded-full border-4 border-primary/50">
                  <img src="https://i.ibb.co/dsTXmQj3/unnamed.jpg" alt="" />
                </div>
              </div>
              <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                Anik Chowdhury
              </h5>
              <p className="text-sm text-warning">Certified Dog Walker</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center p-4 bg-base-100 dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="avatar mx-auto mb-3">
                <div className="w-24 rounded-full border-4 border-success/50">
                  <img src="https://i.ibb.co/VW3s9q4v/unnamed.jpg" alt="" />
                </div>
              </div>
              <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                Farzana Hoque
              </h5>
              <p className="text-sm text-success">Master Pet Groomer</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center p-4 bg-base-100 dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="avatar mx-auto mb-3">
                <div className="w-24 rounded-full border-4 border-error/50"><img src="https://i.ibb.co/TD99kd7b/unnamed.jpg" alt="" /></div>
              </div>
              <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                Shahin Alam
              </h5>
              <p className="text-sm text-error">Customer Support Lead</p>
            </div>
          </div>
        </section>

        <hr className="mb-16 border-gray-200 dark:border-gray-700" />

        {/* 5. Call to Action */}
        <section className="bg-primary/10 dark:bg-primary/20 p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-3">
            Ready to Join the Warm Paws Family?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Experience the difference that passion and professionalism make in
            pet care.
          </p>
          <a
            href="/services"
            className="btn btn-warning btn-lg font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform"
          >
            Explore Our Services 🐕
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
