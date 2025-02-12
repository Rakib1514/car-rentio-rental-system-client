import { ScrollRestoration } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="mx-auto max-w-4xl p-6 text-gray-700">
      <ScrollRestoration />
      <h1 className="mb-6 font-roboto text-3xl font-bold text-primary">
        Terms of Use
      </h1>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          1. Introduction
        </h2>
        <p>
          Welcome to Car-Rentio. By accessing and using our platform, you agree
          to comply with these Terms of Use. If you do not agree, please do not
          use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          2. Eligibility
        </h2>
        <p>
          To use our services, you must be at least 18 years old and hold a
          valid driving license. Users must provide accurate and complete
          information during registration.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          3. Vehicle Rental Terms
        </h2>
        <ul className="list-disc pl-5">
          <li>
            The renter is responsible for the vehicle during the rental period.
          </li>
          <li>Any damages must be reported immediately.</li>
          <li>
            Vehicles must be returned on time to avoid additional charges.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          4. Payments & Cancellations
        </h2>
        <p>
          Payments must be made before renting a vehicle. Cancellations within
          24 hours of booking may be subject to a cancellation fee.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          5. Prohibited Uses
        </h2>
        <p>Renters are not allowed to:</p>
        <ul className="list-disc pl-5">
          <li>Use vehicles for illegal activities.</li>
          <li>Sub-rent or lend the vehicle to others.</li>
          <li>Drive under the influence of drugs or alcohol.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          6. Liability & Insurance
        </h2>
        <p>
          Car-Rentio provides basic insurance coverage, but renters may be held
          responsible for damages beyond standard coverage.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          7. Termination & Account Suspension
        </h2>
        <p>
          We reserve the right to suspend or terminate accounts violating these
          terms, including fraudulent activity or abuse of our platform.
        </p>
      </section>

      <section>
        <h2 className="mb-2 font-openSans text-xl font-semibold">
          8. Changes to Terms
        </h2>
        <p>
          We may update these Terms of Use periodically. Continued use of our
          services means acceptance of any changes.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
