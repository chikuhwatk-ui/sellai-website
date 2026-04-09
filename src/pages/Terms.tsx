export default function Terms() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-3xl mx-auto">
      {/* -- Header -- */}
      <section className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] mb-4">
          Terms of Service
        </h1>
        <p className="text-on-surface-variant text-base">
          Last updated: April 2025
        </p>
      </section>

      {/* -- Content -- */}
      <div className="space-y-12 text-on-surface leading-relaxed text-[1.05rem]">
        {/* 1. Acceptance of Terms */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-on-surface-variant">
            By accessing or using the Sellai platform, you agree to be bound by
            these Terms of Service and all applicable laws and regulations. If
            you do not agree with any part of these terms, you must not use our
            services.
          </p>
        </section>

        {/* 2. The Sellai Platform */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            2. The Sellai Platform
          </h2>
          <p className="text-on-surface-variant">
            Sellai is a marketplace platform that connects buyers, sellers, and
            runners within local communities. Sellers list products for sale,
            buyers browse and purchase those products, and runners facilitate
            last-mile delivery. Sellai acts as an intermediary and does not own,
            produce, or directly sell any of the goods listed on the platform.
          </p>
        </section>

        {/* 3. User Accounts */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            3. User Accounts
          </h2>
          <p className="text-on-surface-variant mb-4">
            To use Sellai, you must create an account. By doing so, you
            represent that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>You are at least 18 years of age.</li>
            <li>
              All information you provide is accurate, complete, and current.
            </li>
            <li>
              You will complete any required identity verification processes.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
          </ul>
        </section>

        {/* 4. Credits & Payments */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            4. Credits & Payments
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai operates a credit-based system for sellers. Key terms
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              Sellers purchase credits to list and promote their products on the
              platform.
            </li>
            <li>
              Payments are processed through Paynow integration for secure,
              local transactions.
            </li>
            <li>
              <strong className="text-on-surface">
                Credits are non-refundable
              </strong>{" "}
              once purchased, except where required by applicable law.
            </li>
            <li>
              Sellai reserves the right to adjust credit pricing and packages at
              any time.
            </li>
          </ul>
        </section>

        {/* 5. Delivery & PIN Verification */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            5. Delivery & PIN Verification
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai uses a PIN-based handoff system to ensure secure deliveries:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              A unique PIN is generated for each delivery and must be confirmed
              by both the runner and the recipient to complete the transaction.
            </li>
            <li>
              Runners are responsible for handling goods with care and
              delivering them in a timely manner.
            </li>
            <li>
              Buyers should verify their items upon delivery before confirming
              the PIN.
            </li>
          </ul>
        </section>

        {/* 6. Prohibited Conduct */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            6. Prohibited Conduct
          </h2>
          <p className="text-on-surface-variant mb-4">
            The following activities are strictly prohibited on Sellai:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              Fraud, including misrepresenting products, prices, or identities.
            </li>
            <li>
              Creating fake or duplicate accounts to manipulate the platform.
            </li>
            <li>
              Abusing, harassing, or threatening other users, sellers, or
              runners.
            </li>
            <li>
              Attempting to circumvent platform fees, payment protections, or
              security measures.
            </li>
            <li>
              Listing prohibited, illegal, or counterfeit goods on the
              marketplace.
            </li>
          </ul>
          <p className="text-on-surface-variant mt-4">
            Violation of these terms may result in immediate account suspension
            or termination.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai is a marketplace platform that facilitates transactions
            between users. To the maximum extent permitted by applicable law:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              Sellai is not liable for the quality, safety, or legality of items
              listed by sellers.
            </li>
            <li>
              Sellai is not responsible for the actions or conduct of any buyer,
              seller, or runner.
            </li>
            <li>
              Sellai shall not be liable for any indirect, incidental, special,
              or consequential damages arising from your use of the platform.
            </li>
          </ul>
        </section>

        {/* 8. Contact */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            8. Contact
          </h2>
          <p className="text-on-surface-variant">
            If you have any questions about these Terms of Service, please
            contact us at{" "}
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
