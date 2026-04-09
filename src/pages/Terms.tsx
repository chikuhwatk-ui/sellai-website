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
          Last updated: April 1, 2026
        </p>
      </section>

      {/* -- Content -- */}
      <div className="space-y-12 text-on-surface leading-relaxed text-[1.05rem]">
        {/* 1. Acceptance of Terms */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-on-surface-variant mb-4">
            By downloading, accessing, or using the Sellai mobile application
            ("the Platform"), you agree to be bound by these Terms of Service.
            These terms form a legally binding agreement between you and Sellai
            (Pvt) Ltd, a company registered in Zimbabwe.
          </p>
          <p className="text-on-surface-variant">
            If you do not agree to these terms, you must stop using the Platform
            immediately. By creating an account or continuing to use Sellai, you
            confirm that you have read, understood, and accepted these terms.
          </p>
        </section>

        {/* 2. Account Registration */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            2. Account Registration
          </h2>
          <p className="text-on-surface-variant mb-4">
            To use Sellai, you must register an account using a valid Zimbabwean
            mobile phone number. Users aged 16–17 may browse and post demands
            with parental or guardian consent. Selling, purchasing credit
            bundles, and delivery services require you to be at least 18 years
            old. By registering, you confirm that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              You are at least 16 years of age (18+ for selling, credits, and
              delivery)
            </li>
            <li>The phone number you provide belongs to you</li>
            <li>All information you provide is truthful and accurate</li>
            <li>
              You will keep your account details secure and not share them with
              others
            </li>
            <li>
              You are responsible for all activity that happens under your
              account
            </li>
          </ul>
        </section>

        {/* 3. User Roles */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            3. User Roles
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai supports three types of users. You may use the Platform in
            one or more of these roles:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">Buyer:</strong> You post
              demands describing what you are looking for. You receive offers
              from sellers, compare them, and accept the one that suits you
              best.
            </li>
            <li>
              <strong className="text-on-surface">Seller:</strong> You browse
              buyer demands, purchase credit bundles to send offers, and fulfil
              orders when your offer is accepted.
            </li>
            <li>
              <strong className="text-on-surface">
                Delivery Partner (Runner):
              </strong>{" "}
              You pick up items from sellers and deliver them to buyers. You
              earn delivery fees which are deposited into your in-app wallet.
              Delivery is completed using PIN verification.
            </li>
          </ul>
        </section>

        {/* 4. Nature of the Platform */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            4. Nature of the Platform
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai is a marketplace that connects buyers with sellers. It is
            important to understand that:
          </p>
          <p className="text-on-surface-variant mb-4">
            Sellai acts only as a matchmaker.{" "}
            <strong className="text-on-surface">
              Sellai is NOT a party to any transaction between buyers and
              sellers.
            </strong>{" "}
            Sellai does not own, sell, resell, or supply any of the goods or
            services listed on the Platform. Sellai does not guarantee the
            quality, safety, legality, or availability of any goods or services
            offered by sellers.
          </p>
          <p className="text-on-surface-variant">
            All transactions are between the buyer and the seller directly.
            Sellai facilitates the connection but is not responsible for the
            outcome of any deal.
          </p>
        </section>

        {/* 5. Credits System */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            5. Credits System
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellers must purchase credit bundles to send offers to buyers.
            Credits are purchased using Paynow or EcoCash. Please note:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong className="text-on-surface">
                Credits are non-refundable
              </strong>{" "}
              once purchased
            </li>
            <li>Credits cannot be transferred to another account</li>
            <li>Credits cannot be exchanged for cash</li>
            <li>Each offer sent to a buyer costs a set number of credits</li>
            <li>
              Sellai may change credit prices at any time with reasonable notice
            </li>
            <li>
              Unused credits remain in your account and do not expire unless
              your account is terminated for breach of these terms
            </li>
          </ul>
        </section>

        {/* 6. Delivery Service */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            6. Delivery Service
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai facilitates delivery through independent Delivery Partners
            (Runners). Please understand that:
          </p>
          <p className="text-on-surface-variant mb-4">
            <strong className="text-on-surface">
              Sellai is NOT a delivery or courier company.
            </strong>{" "}
            Delivery Partners are independent users of the Platform, not
            employees of Sellai. Sellai connects buyers and sellers with
            available Delivery Partners but does not guarantee delivery times or
            the condition of goods upon delivery.
          </p>
          <p className="text-on-surface-variant">
            PIN verification is mandatory to complete every delivery. The buyer
            provides a PIN code which the Delivery Partner must enter to confirm
            successful handover. Do not share your delivery PIN with anyone
            other than the Delivery Partner at the point of delivery.
          </p>
        </section>

        {/* 7. Payments and Wallets */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            7. Payments and Wallets
          </h2>
          <p className="text-on-surface-variant mb-4">
            Payments on Sellai are processed through Paynow and EcoCash. Sellai
            does not store your bank card or mobile money account details.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              Buyers pay sellers directly or through the platform as applicable
            </li>
            <li>Sellers purchase credits via Paynow or EcoCash</li>
            <li>
              Delivery Partners earn fees deposited into their in-app wallet
            </li>
            <li>
              Wallet withdrawals are subject to minimum thresholds and
              processing times
            </li>
            <li>
              Sellai is not responsible for payment failures caused by your
              mobile money provider or bank
            </li>
          </ul>
        </section>

        {/* 8. Prohibited Conduct */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            8. Prohibited Conduct
          </h2>
          <p className="text-on-surface-variant mb-4">
            You must not use Sellai for any unlawful or harmful purpose. The
            following conduct is strictly prohibited:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              Posting false, misleading, or fraudulent demands or offers
            </li>
            <li>Selling counterfeit, stolen, illegal, or prohibited goods</li>
            <li>Harassing, threatening, or abusing other users</li>
            <li>
              Attempting to complete transactions outside the Platform to avoid
              fees
            </li>
            <li>Creating multiple accounts to manipulate the system</li>
            <li>
              Sharing another user's personal information without their consent
            </li>
            <li>
              Using the Platform for money laundering or any financial crime
            </li>
            <li>
              Interfering with the operation of the Platform or attempting to
              hack it
            </li>
            <li>Impersonating another person or entity</li>
          </ul>
        </section>

        {/* 9. Intellectual Property */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            9. Intellectual Property
          </h2>
          <p className="text-on-surface-variant mb-4">
            The Sellai name, logo, app design, and all content created by Sellai
            are the intellectual property of Sellai (Pvt) Ltd. You may not copy,
            modify, distribute, or use any of Sellai's intellectual property
            without our written permission.
          </p>
          <p className="text-on-surface-variant">
            Content you post on the Platform (such as product descriptions and
            images) remains yours, but you grant Sellai a licence to display it
            on the Platform for the purpose of providing our services.
          </p>
        </section>

        {/* 10. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            10. Limitation of Liability
          </h2>
          <p className="text-on-surface-variant mb-4">
            To the fullest extent permitted by the laws of Zimbabwe, Sellai
            shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              The quality, safety, or legality of goods or services offered by
              sellers
            </li>
            <li>Damage to or loss of goods during delivery</li>
            <li>Payment disputes between buyers and sellers</li>
            <li>
              Any loss or damage arising from transactions between users
            </li>
            <li>Service interruptions, technical errors, or data loss</li>
            <li>Actions or omissions of Delivery Partners</li>
            <li>
              Any indirect, incidental, or consequential damages arising from
              your use of the Platform
            </li>
          </ul>
        </section>

        {/* 11. Dispute Resolution */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            11. Dispute Resolution
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai encourages users to resolve disputes directly with each
            other. If a dispute arises between a buyer and a seller, or between
            a user and a Delivery Partner:
          </p>
          <p className="text-on-surface-variant mb-4">
            You should first try to resolve the matter through the in-app chat.
            If that fails, you may report the issue to Sellai through the app.
            Sellai may, at its discretion, assist in mediating the dispute, but
            is not obligated to do so and is not responsible for the outcome.
          </p>
          <p className="text-on-surface-variant">
            Sellai's decision on any dispute it chooses to mediate shall be
            final.
          </p>
        </section>

        {/* 12. Account Suspension and Termination */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            12. Account Suspension and Termination
          </h2>
          <p className="text-on-surface-variant mb-4">
            Sellai reserves the right to suspend or permanently terminate your
            account if:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>You breach any of these Terms of Service</li>
            <li>
              You engage in prohibited conduct as described in Section 8
            </li>
            <li>
              We receive repeated complaints from other users about your
              behaviour
            </li>
            <li>
              We suspect fraudulent or illegal activity on your account
            </li>
            <li>You fail to verify your identity when requested</li>
          </ul>
        </section>

        {/* 13. Changes to These Terms */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            13. Changes to These Terms
          </h2>
          <p className="text-on-surface-variant mb-4">
            We may update these Terms of Service from time to time. When we make
            changes, we will update the date at the top of this page and notify
            you through the app. If you continue to use Sellai after changes are
            made, you agree to the updated terms.
          </p>
          <p className="text-on-surface-variant">
            For significant changes, we will give you at least 14 days' notice
            before the new terms take effect.
          </p>
        </section>

        {/* 14. Governing Law */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            14. Governing Law
          </h2>
          <p className="text-on-surface-variant">
            These Terms of Service are governed by and interpreted in accordance
            with the laws of the Republic of Zimbabwe. Any legal disputes
            arising from these terms or your use of the Platform shall be
            subject to the exclusive jurisdiction of the courts of Zimbabwe.
          </p>
        </section>

        {/* 15. Contact Us */}
        <section>
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-4">
            15. Contact Us
          </h2>
          <p className="text-on-surface-variant">
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <div className="mt-4 space-y-1 text-on-surface-variant">
            <p>
              Email:{" "}
              <a
                href="mailto:support@sellai.app"
                className="text-primary font-semibold hover:underline"
              >
                support@sellai.app
              </a>
            </p>
            <p>Company: Sellai (Pvt) Ltd</p>
            <p>Country: Zimbabwe</p>
          </div>
        </section>

        {/* Footer disclaimer */}
        <section className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
          <p className="text-on-surface-variant text-sm text-center leading-relaxed">
            By continuing to use Sellai, you acknowledge that you have read,
            understood, and agreed to these Terms of Service. These terms are
            governed by the laws of Zimbabwe.
          </p>
        </section>
      </div>
    </main>
  );
}
