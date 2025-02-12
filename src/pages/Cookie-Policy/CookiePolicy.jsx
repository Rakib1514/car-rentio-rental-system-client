const CookiePolicy = () => {
  return (
    <div className="mx-auto max-w-4xl p-6 text-gray-700">
      <h1 className="mb-6 font-roboto text-3xl font-bold text-primary">
        Cookie Policy
      </h1>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          1. Introduction
        </h2>
        <p>
          Car-Rentio uses cookies to enhance user experience, analyze site
          traffic, and improve our services. This Cookie Policy explains how and
          why we use cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          2. What Are Cookies?
        </h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help us recognize your preferences and provide a better
          user experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          3. Types of Cookies We Use
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Essential Cookies:</strong> Necessary for website
            functionality.
          </li>
          <li>
            <strong>Analytical Cookies:</strong> Help us understand website
            usage and improve performance.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used for personalized
            advertising and promotions.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          4. Managing Cookies
        </h2>
        <p>
          You can manage or disable cookies through your browser settings.
          However, restricting cookies may affect your experience on our
          website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          5. Third-Party Cookies
        </h2>
        <p>
          Some third-party services, such as analytics tools and advertisers,
          may also place cookies on your device. These are governed by their own
          privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          6. Updates to This Policy
        </h2>
        <p>
          We may update our Cookie Policy from time to time. Any changes will be
          posted on this page, and continued use of our website means acceptance
          of the updated policy.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
