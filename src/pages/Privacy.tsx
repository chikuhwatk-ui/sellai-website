export default function Privacy() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-3xl mx-auto">
      {/* -- Header -- */}
      <section className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] mb-4">
          Privacy Policy
        </h1>
        <p className="text-on-surface-variant text-base">
          Last updated: April 2025
        </p>
      </section>

      {/* -- Content -- */}
      <div className="space-y-12 text-on-surface leading-relaxed text-[1.05rem]">
        {/* 1. Information We Collect */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            1. Information We Collect
          </h2>
          <p className="text-on-surface-variant mb-4">
            When you use Sellai, we may collect the following types of
            information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">Account information</strong>{" "}
              — your name, email address, phone number, and profile details
              provided during registration.
            </li>
            <li>
              <strong className="text-on-surface">Transaction data</strong> —
              details about purchases, sales, deliveries, and credit usage on
              the platform.
            </li>
            <li>
              <strong className="text-on-surface">Location data</strong> —
              approximate or precise location information used to match you with
              nearby buyers, sellers, and runners.
            </li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-on-surface-variant mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              Match buyers with relevant sellers and available runners in their
              area.
            </li>
            <li>
              Verify user identities and maintain the security of the
              marketplace.
            </li>
            <li>
              Communicate with you about your orders, account, and platform
              updates.
            </li>
            <li>
              Improve our services, develop new features, and enhance the
              overall user experience.
            </li>
          </ul>
        </section>

        {/* 3. Data Sharing */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            3. Data Sharing
          </h2>
          <p className="text-on-surface-variant mb-4">
            We share your information only with the parties directly involved in
            your transactions — such as sellers fulfilling your order and
            runners delivering your items. This is necessary for the marketplace
            to function.
          </p>
          <p className="text-on-surface-variant">
            <strong className="text-on-surface">
              We never sell your personal data to third parties.
            </strong>{" "}
            We do not share your information with advertisers or data brokers.
          </p>
        </section>

        {/* 4. Data Security */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            4. Data Security
          </h2>
          <p className="text-on-surface-variant">
            We take the security of your data seriously. All data is encrypted
            in transit and at rest using industry-standard protocols. We use
            secure authentication mechanisms to protect your account and
            regularly review our security practices to safeguard your
            information.
          </p>
        </section>

        {/* 5. Your Rights */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            5. Your Rights
          </h2>
          <p className="text-on-surface-variant mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">Access</strong> your personal
              data and request a copy of the information we hold about you.
            </li>
            <li>
              <strong className="text-on-surface">Correct</strong> any
              inaccurate or incomplete personal data associated with your
              account.
            </li>
            <li>
              <strong className="text-on-surface">Delete</strong> your personal
              data, subject to any legal obligations we may have to retain
              certain records.
            </li>
          </ul>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            6. Contact
          </h2>
          <p className="text-on-surface-variant">
            If you have any questions or concerns about this Privacy Policy or
            how we handle your data, please contact us at{" "}
            <a
              href="mailto:hello@sellai.africa"
              className="text-primary font-semibold hover:underline"
            >
              hello@sellai.africa
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
