import { ScrollRestoration } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-700">
      <ScrollRestoration/>
      <h1 className="text-3xl font-roboto font-bold text-primary mb-6">
        Privacy Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">1. Introduction</h2>
        <p>
          At Car-Rentio, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">2. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email, phone number, payment details, and driving license information when you use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5">
          <li>To provide and manage our car rental services.</li>
          <li>To process payments and verify identity.</li>
          <li>To communicate updates, promotions, or policy changes.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">4. Data Protection</h2>
        <p>
          We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">5. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal data. However, we may share information with third-party service providers necessary for operating our services, such as payment processors and identity verification partners.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal information. You can also opt out of receiving marketing communications at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold font-openSans mb-2">7. Changes to Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of our services after changes means acceptance of the revised policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
