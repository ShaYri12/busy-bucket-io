import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-[40px] pb-[100px] pt-[25px]">
      <h2 className="mt-[20px] text-text-primary text-[32px] leading-[36px] font-[700] mb-[10px]">
        Privacy Policy
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Your privacy is important to us. It is Coding Brothers' policy to
          respect your privacy and comply with any applicable law and regulation
          regarding any personal information we may collect about you, including
          across our website,{" "}
          <Link className="text-[#0000EE] underline" to="/">
            busybucket.io
          </Link>
          , and other sites we own and operate.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Personal information is any information about you which can be used to
          identify you. This includes information about you as a person (such as
          name, address, and date of birth), your devices, payment details, and
          even information about how you use a website or online service.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          In the event our site contains links to third-party sites and
          services, please be aware that those sites and services have their own
          privacy policies. After following a link to any third-party content,
          you should read their posted privacy policy information about how they
          collect and use personal information. This Privacy Policy does not
          apply to any of your activities after you leave our site.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          This policy is effective as of 10 February 2023.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Last updated: 11 February 2023
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Information We Collect
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Information we collect falls into one of two categories: “voluntarily
          provided” information and “automatically collected” information.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          “Voluntarily provided” information refers to any information you
          knowingly and actively provide us when using or participating in any
          of our services and promotions.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          “Automatically collected” information refers to any information
          automatically sent by your devices in the course of accessing our
          products and services.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Log Data
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          When you visit our website, our servers may automatically log the
          standard data provided by your web browser. It may include your
          device’s Internet Protocol (IP) address, your browser type and
          version, the pages you visit, the time and date of your visit, the
          time spent on each page, and other details about your visit.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Additionally, if you encounter certain errors while using the site, we
          may automatically collect data about the error and the circumstances
          surrounding its occurrence. This data may include technical details
          about your device, what you were trying to do when the error happened,
          and other technical information relating to the problem. You may or
          may not receive notice of such errors, even in the moment they occur,
          that they have occurred, or what the nature of the error is.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Please be aware that while this information may not be personally
          identifying by itself, it may be possible to combine it with other
          data to personally identify individual persons.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Device Data
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          When you visit our website or interact with our services, we may
          automatically collect data about your device, such as:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">Operating System</li>
            <li className="custom-bullet-list">Geo-location data</li>
          </ul>
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Data we collect can depend on the individual settings of your device
          and software. We recommend checking the policies of your device
          manufacturer or software provider to learn what information they make
          available to us.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Personal Information
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We may ask for personal information — for example, when you subscribe
          to our newsletter or when you contact us — which may include one or
          more of the following:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px]">
            <li className="custom-bullet-list">Name</li>
            <li className="custom-bullet-list">Email</li>
            <li className="custom-bullet-list">Phone/mobile number</li>
            <li className="custom-bullet-list">Home/mailing address</li>
          </ul>
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Transaction Data
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Transaction data refers to data that accumulates over the normal
          course of operation on our platform. This may include transaction
          records, stored files, user profiles, analytics data and other
          metrics, as well as other types of information, created or generated,
          as users interact with our services.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Legitimate Reasons for Processing Your Personal Information
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We only collect and use your personal information when we have a
          legitimate reason for doing so. In which instance, we only collect
          personal information that is reasonably necessary to provide our
          services to you.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Collection and Use of Information
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We may collect personal information from you when you do any of the
          following on our website:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">Register for an account</li>
            <li className="custom-bullet-list">Purchase a subscription</li>
            <li className="custom-bullet-list">
              Sign up to receive updates from us via email or social media
              channels
            </li>
            <li className="custom-bullet-list">
              Use a mobile device or web browser to access our content
            </li>
            <li className="custom-bullet-list">
              Contact us via email, social media, or on any similar technologies
            </li>
            <li className="custom-bullet-list">
              When you mention us on social media
            </li>
          </ul>
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We may collect, hold, use, and disclose information for the following
          purposes, and personal information will not be further processed in a
          manner that is incompatible with these purposes:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">
              to provide you with our platform's core features and services
            </li>
            <li className="custom-bullet-list">
              to enable you to customize or personalize your experience of our
              website
            </li>
            <li className="custom-bullet-list">
              to contact and communicate with you
            </li>
            <li className="custom-bullet-list">
              to enable you to access and use our website, associated
              applications, and associated social media platforms
            </li>
            <li className="custom-bullet-list">
              for internal record keeping and administrative purposes
            </li>
            <li className="custom-bullet-list">
              for technical assessment, including to operate and improve our
              app, associated applications, and associated social media
              platforms
            </li>
          </ul>
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We may combine voluntarily provided and automatically collected
          personal information with general information or research data we
          receive from other trusted sources. For example, If you provide us
          with your location, we may combine this with general information about
          currency and language to provide you with an enhanced experience of
          our site and service.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Security of Your Personal Information
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          When we collect and process personal information, and while we retain
          this information, we will protect it within commercially acceptable
          means to prevent loss and theft, as well as unauthorized access,
          disclosure, copying, use, or modification.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Although we will do our best to protect the personal information you
          provide to us, we advise that no method of electronic transmission or
          storage is 100% secure, and no one can guarantee absolute data
          security.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          You are responsible for selecting any password and its overall
          security strength, ensuring the security of your own information
          within the bounds of our services. For example, ensuring any passwords
          associated with accessing your personal information and accounts are
          secure and confidential.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        How Long We Keep Your Personal Information
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We keep your personal information only for as long as we need to. This
          time period may depend on what we are using your information for, in
          accordance with this privacy policy. For example, if you have provided
          us with personal information as part of creating an account with us,
          we may retain this information for the duration your account exists on
          our system. If your personal information is no longer required for
          this purpose, we will delete it or make it anonymous by removing all
          details that identify you.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          However, if necessary, we may retain your personal information for our
          compliance with a legal, accounting, or reporting obligation or for
          archiving purposes in the public interest, scientific, or historical
          research purposes or statistical purposes.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Children’s Privacy
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We do not aim any of our products or services directly at children
          under the age of 13, and we do not knowingly collect personal
          information about children under 13.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Disclosure of Personal Information to Third Parties
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We may disclose personal information to:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">
              a parent, subsidiary, or affiliate of our company
            </li>
            <li className="custom-bullet-list">
              third-party service providers for the purpose of enabling them to
              provide their services, including (without limitation) IT service
              providers, data storage, hosting and server providers, analytics,
              error loggers, debt collectors, maintenance or problem-solving
              providers, professional advisors, and payment systems operators
            </li>
            <li className="custom-bullet-list">
              our employees, contractors, and/or related entities
            </li>
            <li className="custom-bullet-list">
              our existing or potential agents or business partners
            </li>
            <li className="custom-bullet-list">
              credit reporting agencies, courts, tribunals, and regulatory
              authorities, in the event you fail to pay for goods or services we
              have provided to you
            </li>
            <li className="custom-bullet-list">
              courts, tribunals, regulatory authorities, and law enforcement
              officers, as required by law, in connection with any actual or
              prospective legal proceedings, or in order to establish, exercise,
              or defend our legal rights
            </li>
            <li className="custom-bullet-list">
              third parties, including agents or sub-contractors, who assist us
              in providing information, products, services, or direct marketing
              to you
            </li>
            <li className="custom-bullet-list">
              third parties to collect and process data
            </li>
            <li className="custom-bullet-list">
              an entity that buys, or to which we transfer all or substantially
              all of our assets and business
            </li>
          </ul>
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Third parties we currently use include:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">Google Analytics</li>
            <li className="custom-bullet-list">Microsoft Clarity</li>
            <li className="custom-bullet-list">Stripe</li>
          </ul>
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        International Transfers of Personal Information
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          The personal information we collect is stored and/or processed in
          United States, or where we or our partners, affiliates, and
          third-party providers maintain facilities.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          The countries to which we store, process, or transfer your personal
          information may not have the same data protection laws as the country
          in which you initially provided the information. If we transfer your
          personal information to third parties in other countries: (i) we will
          perform those transfers in accordance with the requirements of
          applicable law; and (ii) we will protect the transferred personal
          information in accordance with this privacy policy.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Your Rights and Controlling Your Personal Information
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Your choice:</span> By providing personal
          information to us, you understand we will collect, hold, use, and
          disclose your personal information in accordance with this privacy
          policy. You do not have to provide personal information to us,
          however, if you do not, it may affect your use of our website or the
          products and/or services offered on or through it.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Information from third parties:</span> If
          we receive personal information about you from a third party, we will
          protect it as set out in this privacy policy. If you are a third party
          providing personal information about somebody else, you represent and
          warrant that you have such person’s consent to provide the personal
          information to us.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Marketing permission:</span> If you have
          previously agreed to us using your personal information for direct
          marketing purposes, you may change your mind at any time by contacting
          us using the details below.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Access:</span> You may request details of
          the personal information that we hold about you.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Correction:</span> If you believe that
          any information we hold about you is inaccurate, out of date,
          incomplete, irrelevant, or misleading, please contact us using the
          details provided in this privacy policy. We will take reasonable steps
          to correct any information found to be inaccurate, incomplete,
          misleading, or out of date.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Non-discrimination:</span> We will not
          discriminate against you for exercising any of your rights over your
          personal information. Unless your personal information is required to
          provide you with a particular service or offer (for example processing
          transaction data), we will not deny you goods or services and/or
          charge you different prices or rates for goods or services, including
          through granting discounts or other benefits, or imposing penalties,
          or provide you with a different level or quality of goods or services.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Notification of data breaches:</span> We
          will comply with laws applicable to us in respect of any data breach.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Complaints:</span> If you believe that we
          have breached a relevant data protection law and wish to make a
          complaint, please contact us using the details below and provide us
          with full details of the alleged breach. We will promptly investigate
          your complaint and respond to you, in writing, setting out the outcome
          of our investigation and the steps we will take to deal with your
          complaint. You also have the right to contact a regulatory body or
          data protection authority in relation to your complaint.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          <span className="font-[700]">Unsubscribe:</span> To unsubscribe from
          our email database or opt-out of communications (including marketing
          communications), please contact us using the details provided in this
          privacy policy, or opt-out using the opt-out facilities provided in
          the communication. We may need to request specific information from
          you to help us confirm your identity.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Use of Cookies
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We use “cookies” to collect information about you and your activity
          across our site. A cookie is a small piece of data that our website
          stores on your computer, and accesses each time you visit, so we can
          understand how you use our site. This helps us serve you content based
          on preferences you have specified.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Please refer to our Cookie Policy for more information.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Business Transfers
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          If we or our assets are acquired, or in the unlikely event that we go
          out of business or enter bankruptcy, we would include data, including
          your personal information, among the assets transferred to any parties
          who acquire us. You acknowledge that such transfers may occur, and
          that any parties who acquire us may, to the extent permitted by
          applicable law, continue to use your personal information according to
          this policy, which they will be required to assume as it is the basis
          for any ownership or use rights we have over such information.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Limits of Our Policy
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and policies
          of those sites, and cannot accept responsibility or liability for
          their respective privacy practices.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Changes to This Policy
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          At our discretion, we may change our privacy policy to reflect updates
          to our business processes, current acceptable practices, or
          legislative or regulatory changes. If we decide to change this privacy
          policy, we will post the changes here at the same link by which you
          are accessing this privacy policy.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          If the changes are significant, or if required by applicable law, we
          will contact you (based on your selected preferences for
          communications from us) and all our registered users with the new
          details and links to the updated or changed policy.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          If required by law, we will get your permission or give you the
          opportunity to opt in to or opt out of, as applicable, any new uses of
          your personal information.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Additional Disclosures for California Compliance (US)
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Under California Civil Code Section 1798.83, if you live in California
          and your business relationship with us is mainly for personal, family,
          or household purposes, you may ask us about the information we release
          to other organizations for their marketing purposes.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          To make such a request, please contact us using the details provided
          in this privacy policy with “Request for California privacy
          information” in the subject line. You may make this type of request
          once every calendar year. We will email you a list of categories of
          personal information we revealed to other organisations for their
          marketing purposes in the last calendar year, along with their names
          and addresses. Not all personal information shared in this way is
          covered by Section 1798.83 of the California Civil Code.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Do Not Track
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Some browsers have a “Do Not Track” feature that lets you tell
          websites that you do not want to have your online activities tracked.
          At this time, we do not respond to browser “Do Not Track” signals.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We adhere to the standards outlined in this privacy policy, ensuring
          we collect and process personal information lawfully, fairly,
          transparently, and with legitimate, legal reasons for doing so.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Cookies and Pixels
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          At all times, you may decline cookies from our site if your browser
          permits. Most browsers allow you to activate settings on your browser
          to refuse the setting of all or some cookies. Accordingly, your
          ability to limit cookies is based only on your browser’s capabilities.
          Please refer to the Cookies section of this privacy policy for more
          information.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        CCPA-permitted financial incentives
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          In accordance with your right to non-discrimination, we may offer you
          certain financial incentives permitted by the CCPA that can result in
          different prices, rates, or quality levels for the goods or services
          we provide.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Any CCPA-permitted financial incentive we offer will reasonably relate
          to the value of your personal information, and we will provide written
          terms that describe clearly the nature of such an offer. Participation
          in a financial incentive program requires your prior opt-in consent,
          which you may revoke at any time.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        California Notice of Collection
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          In the past 12 months, we have collected the following categories of
          personal information enumerated in the California Consumer Privacy
          Act:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">
              Identifiers, such as name, email address, phone number account
              name, IP address, and an ID or number assigned to your account.
            </li>
            <li className="custom-bullet-list">
              Customer records, such as billing and shipping address, and credit
              or debit card data.
            </li>
            <li className="custom-bullet-list">
              Commercial information, such as products or services history and
              purchases.
            </li>
            <li className="custom-bullet-list">
              Audio or visual data, such as photos or videos you share with us
              or post on the service.
            </li>
            <li className="custom-bullet-list">Geolocation data.</li>
          </ul>
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          For more information on information we collect, including the sources
          we receive information from, review the “Information We Collect”
          section. We collect and use these categories of personal information
          for the business purposes described in the “Collection and Use of
          Information” section, including to provide and manage our Service.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Right to Know and Delete
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          If you are a California resident, you have rights to delete your
          personal information we collected and know certain information about
          our data practices in the preceding 12 months. In particular, you have
          the right to request the following from us:
          <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px] pb-[10px]">
            <li className="custom-bullet-list">
              The categories of personal information we have collected about
              you;
            </li>
            <li className="custom-bullet-list">
              The categories of sources from which the personal information was
              collected;
            </li>
            <li className="custom-bullet-list">
              The categories of personal information about you we disclosed for
              a business purpose or sold;
            </li>
            <li className="custom-bullet-list">
              The categories of third parties to whom the personal information
              was disclosed for a business purpose or sold;
            </li>
            <li className="custom-bullet-list">
              The business or commercial purpose for collecting or selling the
              personal information; and
            </li>
            <li className="custom-bullet-list">
              The specific pieces of personal information we have collected
              about you.
            </li>
          </ul>
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          To exercise any of these rights, please contact us using the details
          provided in this privacy policy.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Shine the Light
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          If you are a California resident, in addition to the rights discussed
          above, you have the right to request information from us regarding the
          manner in which we share certain personal information as defined by
          California’s “Shine the Light” with third parties and affiliates for
          their own direct marketing purposes.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          To receive this information, send us a request using the contact
          details provided in this privacy policy. Requests must include
          “California Privacy Rights Request” in the first line of the
          description and include your name, street address, city, state, and
          ZIP code.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Contact Us
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          For any questions or concerns regarding your privacy, you may contact
          us by email:{" "}
          <a className="text-[#0000EE] underline">support@busybucket.io</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
