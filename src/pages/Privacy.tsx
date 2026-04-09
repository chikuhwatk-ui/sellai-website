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
          Last updated: April 1, 2026
        </p>
      </section>

      {/* -- Content -- */}
      <div className="space-y-12 text-on-surface leading-relaxed text-[1.05rem]">
        {/* 1. Who We Are */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            1. Who We Are
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai (Pvt) Ltd ("Sellai", "we", "us", or "our") is the data
            controller responsible for your personal data. We are a company
            registered in Zimbabwe that operates the Sellai mobile application,
            a marketplace connecting buyers, sellers, and delivery partners.
          </p>
          <p className="text-on-surface-variant">
            This Privacy Policy explains how we collect, use, store, and protect
            your personal information in accordance with the Data Protection Act
            [Chapter 11:12] of Zimbabwe (2021).
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            2. Information We Collect
          </h2>
          <p className="text-on-surface-variant mb-4">
            We collect the following types of personal data when you use Sellai:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">Phone number:</strong> Used
              for account registration, login, and verification
            </li>
            <li>
              <strong className="text-on-surface">Name:</strong> Your display
              name shown to other users
            </li>
            <li>
              <strong className="text-on-surface">Location data:</strong> Your
              device location, used to match you with nearby buyers or sellers
              and to track deliveries
            </li>
            <li>
              <strong className="text-on-surface">Transaction history:</strong>{" "}
              Records of your demands, offers, accepted deals, and delivery
              activity
            </li>
            <li>
              <strong className="text-on-surface">Chat messages:</strong>{" "}
              Messages between buyers and sellers, stored in encrypted form
            </li>
            <li>
              <strong className="text-on-surface">Device information:</strong>{" "}
              Device type, operating system, app version, and unique device
              identifiers for security and troubleshooting
            </li>
            <li>
              <strong className="text-on-surface">
                ID verification photos:
              </strong>{" "}
              If submitted, used only for trust and safety verification
            </li>
            <li>
              <strong className="text-on-surface">
                Wallet and credit data:
              </strong>{" "}
              Your credit balance (sellers) and wallet balance (delivery
              partners)
            </li>
          </ul>
        </section>

        {/* 3. How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-on-surface-variant mb-4">
            We process your personal data for the following purposes, each of
            which has a lawful basis under the Data Protection Act [Chapter
            11:12]:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">Matchmaking:</strong>{" "}
              Connecting buyers with relevant sellers based on demands and
              location
            </li>
            <li>
              <strong className="text-on-surface">Delivery tracking:</strong>{" "}
              Sharing necessary location data with delivery partners to complete
              deliveries
            </li>
            <li>
              <strong className="text-on-surface">Payment processing:</strong>{" "}
              Facilitating credit purchases and wallet transactions through
              Paynow and EcoCash
            </li>
            <li>
              <strong className="text-on-surface">
                Safety and verification:
              </strong>{" "}
              Verifying user identity and using PIN codes to confirm deliveries
            </li>
            <li>
              <strong className="text-on-surface">Communication:</strong>{" "}
              Enabling in-app chat between buyers and sellers
            </li>
            <li>
              <strong className="text-on-surface">
                Improving our service:
              </strong>{" "}
              Understanding how users interact with the app to make it better
            </li>
            <li>
              <strong className="text-on-surface">Legal compliance:</strong>{" "}
              Meeting our obligations under Zimbabwean law
            </li>
            <li>
              <strong className="text-on-surface">Fraud prevention:</strong>{" "}
              Detecting and preventing misuse of the Platform
            </li>
          </ul>
        </section>

        {/* 4. Location Data and Privacy */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            4. Location Data and Privacy
          </h2>
          <p className="text-on-surface-variant mb-4">
            Location is important to how Sellai works. Here is how we handle it:
          </p>
          <p className="text-on-surface-variant mb-4">
            <strong className="text-on-surface">For Buyers:</strong> Your
            general area is used to match you with nearby sellers. Your exact
            address is NOT shared with sellers. Your precise location is only
            shared with a Delivery Partner after you request delivery, and only
            for the purpose of completing that delivery.
          </p>
          <p className="text-on-surface-variant mb-4">
            <strong className="text-on-surface">For Sellers:</strong> Your
            general area may be visible to buyers so they can see how close you
            are.
          </p>
          <p className="text-on-surface-variant mb-4">
            <strong className="text-on-surface">For Delivery Partners:</strong>{" "}
            Your live location is tracked during active deliveries to provide
            delivery updates to the buyer.
          </p>
          <p className="text-on-surface-variant">
            You can control location permissions through your device settings.
            However, disabling location may limit some features of the app.
          </p>
        </section>

        {/* 5. Chat and Message Privacy */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            5. Chat and Message Privacy
          </h2>
          <p className="text-on-surface-variant mb-4">
            Messages between buyers and sellers are encrypted at rest, meaning
            they are stored in a secure, encrypted format on our servers. We do
            not read your private messages unless required by law or to
            investigate a reported safety concern.
          </p>
          <p className="text-on-surface-variant">
            Please do not share sensitive personal information (such as bank
            PINs or passwords) in chat messages.
          </p>
        </section>

        {/* 6. Payment Data */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            6. Payment Data
          </h2>
          <p className="text-on-surface-variant mb-4">
            Payments on Sellai are processed by Paynow and EcoCash.{" "}
            <strong className="text-on-surface">
              Sellai does NOT store your bank card details, mobile money PIN, or
              full payment account numbers.
            </strong>{" "}
            We only store records of transactions (amounts, dates, and
            transaction references) for your transaction history.
          </p>
          <p className="text-on-surface-variant">
            Paynow and EcoCash have their own privacy policies governing how
            they handle your payment information.
          </p>
        </section>

        {/* 7. Who We Share Your Data With */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            7. Who We Share Your Data With
          </h2>
          <p className="text-on-surface-variant mb-4">
            We only share your personal data when necessary to provide our
            services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">With other users:</strong>{" "}
              Sellers see your demand details. Delivery Partners receive your
              delivery address and phone number when you request delivery.
              Buyers see seller profiles and offer details.
            </li>
            <li>
              <strong className="text-on-surface">With Paynow:</strong> To
              process credit purchases and payments. Only the data necessary to
              complete the transaction is shared.
            </li>
            <li>
              <strong className="text-on-surface">With law enforcement:</strong>{" "}
              If required by Zimbabwean law, a court order, or to protect the
              safety of our users.
            </li>
          </ul>
          <p className="text-on-surface-variant mt-4">
            <strong className="text-on-surface">
              We do NOT sell your personal data to advertisers or any third
              parties.
            </strong>
          </p>
        </section>

        {/* 8. ID Verification */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            8. ID Verification
          </h2>
          <p className="text-on-surface-variant">
            If you submit identification documents or photos for verification,
            these are stored securely and used only for the purpose of verifying
            your identity and building trust on the Platform. Verification data
            is handled with strict access controls and is not shared with other
            users.
          </p>
        </section>

        {/* 9. Data Retention */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            9. Data Retention
          </h2>
          <p className="text-on-surface-variant mb-4">
            We keep your personal data for as long as your account is active. If
            you delete your account, we will delete your personal data within 30
            days, except where we are required by law to keep certain records.
          </p>
          <p className="text-on-surface-variant">
            Transaction records may be kept for up to 5 years after your account
            is closed, as required for tax and legal compliance under Zimbabwean
            law.
          </p>
        </section>

        {/* 10. Your Rights Under the Data Protection Act */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            10. Your Rights Under the Data Protection Act
          </h2>
          <p className="text-on-surface-variant mb-4">
            Under the Data Protection Act [Chapter 11:12] of Zimbabwe, you have
            the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">Right of access:</strong> You
              can request a copy of all personal data we hold about you
            </li>
            <li>
              <strong className="text-on-surface">Right to correction:</strong>{" "}
              You can ask us to correct any inaccurate or incomplete data
            </li>
            <li>
              <strong className="text-on-surface">Right to deletion:</strong>{" "}
              You can request that we delete your personal data, subject to
              legal requirements
            </li>
            <li>
              <strong className="text-on-surface">
                Right to data portability:
              </strong>{" "}
              You can request your data in a format that can be transferred to
              another service
            </li>
            <li>
              <strong className="text-on-surface">Right to object:</strong> You
              can object to the processing of your data in certain circumstances
            </li>
            <li>
              <strong className="text-on-surface">
                Right to withdraw consent:
              </strong>{" "}
              Where processing is based on your consent, you may withdraw it at
              any time
            </li>
          </ul>
        </section>

        {/* 11. Complaints */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            11. Complaints
          </h2>
          <p className="text-on-surface-variant mb-4">
            If you believe your data protection rights have been violated, you
            have the right to lodge a complaint with the Postal and
            Telecommunications Regulatory Authority of Zimbabwe (POTRAZ), which
            oversees data protection compliance in Zimbabwe.
          </p>
          <p className="text-on-surface-variant">
            We encourage you to contact us first so we can try to resolve your
            concern directly.
          </p>
        </section>

        {/* 12. Young Users */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            12. Young Users
          </h2>
          <p className="text-on-surface-variant mb-4">
            Users aged 16–17 may use Sellai to browse and post demands with
            parental or guardian consent. Selling, purchasing credit bundles, and
            operating as a delivery runner requires users to be 18 or older, as
            these activities involve entering legally binding contracts and
            handling payments.
          </p>
          <p className="text-on-surface-variant">
            We do not knowingly collect personal data from children under 16. If
            we become aware that a child under 16 has created an account, we
            will take steps to delete their account and data promptly.
          </p>
        </section>

        {/* 13. Cookies and Tracking */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            13. Cookies and Tracking
          </h2>
          <p className="text-on-surface-variant">
            The Sellai mobile app uses minimal tracking technologies, limited to
            what is necessary for the app to function properly. We do not use
            advertising trackers or sell data to ad networks. Analytics data, if
            collected, is anonymised and used only to improve app performance.
          </p>
        </section>

        {/* 14. Security Measures */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            14. Security Measures
          </h2>
          <p className="text-on-surface-variant mb-4">
            We take the security of your data seriously and implement
            appropriate measures to protect it, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>Encryption of chat messages at rest</li>
            <li>Secure storage of verification documents</li>
            <li>
              Access controls limiting who within our team can access personal
              data
            </li>
            <li>Regular security reviews of our systems</li>
            <li>
              PIN-based delivery verification to prevent unauthorised handovers
            </li>
          </ul>
        </section>

        {/* 15. Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            15. Changes to This Policy
          </h2>
          <p className="text-on-surface-variant mb-4">
            We may update this Privacy Policy from time to time. When we make
            changes, we will update the date at the top of this policy and
            notify you through the app. We encourage you to review this policy
            regularly.
          </p>
          <p className="text-on-surface-variant">
            For significant changes that affect how we process your data, we
            will give you at least 14 days' notice.
          </p>
        </section>

        {/* 16. Contact Us */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            16. Contact Us
          </h2>
          <p className="text-on-surface-variant mb-4">
            If you have any questions about this Privacy Policy or wish to
            exercise your data protection rights, please contact us:
          </p>
          <div className="space-y-1 text-on-surface-variant">
            <p>
              Email:{" "}
              <a
                href="mailto:privacy@sellai.app"
                className="text-primary font-semibold hover:underline"
              >
                privacy@sellai.app
              </a>
            </p>
            <p>Data Controller: Sellai (Pvt) Ltd</p>
            <p>Country: Zimbabwe</p>
          </div>
          <p className="text-on-surface-variant mt-4">
            For complaints about data protection, you may also contact POTRAZ
            (Postal and Telecommunications Regulatory Authority of Zimbabwe).
          </p>
        </section>
      </div>
    </main>
  );
}
