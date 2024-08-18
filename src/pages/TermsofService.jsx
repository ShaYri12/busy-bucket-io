import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsofService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-[40px] pb-[100px] pt-[25px]">
      <h2 className="mt-[20px] text-text-primary text-[32px] leading-[36px] font-[700] mb-[10px]">
        Terms of Service
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          These Terms of Service govern your use of the website located at{" "}
          <Link className="text-[#0000EE] underline" to="/">
            busybucket.io
          </Link>{" "}
          and any related services provided by Coding Brothers.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          By accessing{" "}
          <Link className="text-[#0000EE] underline" to="/">
            busybucket.io
          </Link>
          , you agree to abide by these Terms of Service and to comply with all
          applicable laws and regulations. If you do not agree with these Terms
          of Service, you are prohibited from using or accessing this website or
          using any other services provided by Coding Brothers.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We, Coding Brothers, reserve the right to review and amend any of
          these Terms of Service at our sole discretion. Upon doing so, we will
          update this page. Any changes to these Terms of Service will take
          effect immediately from the date of publication.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          These Terms of Service were last updated on 11 February 2023.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Limitations of Use
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          By using this website, you warrant on behalf of yourself, your users,
          and other parties you represent that you will not:
        </p>
        <ul className="text-text-secondary text-[16px] leading-[26px] mb-0 list-disc pl-[40px]">
          <li className="custom-bullet-list">
            modify, copy, prepare derivative works of, decompile, or reverse
            engineer any materials and software contained on this website;
          </li>
          <li className="custom-bullet-list">
            remove any copyright or other proprietary notations from any
            materials and software on this website;
          </li>
          <li className="custom-bullet-list">
            transfer the materials to another person or “mirror” the materials
            on any other server;
          </li>
          <li className="custom-bullet-list">
            knowingly or negligently use this website or any of its associated
            services in a way that abuses or disrupts our networks or any other
            service Coding Brothers provides;
          </li>
          <li className="custom-bullet-list">
            use this website or its associated services to transmit or publish
            any harassing, indecent, obscene, fraudulent, or unlawful material;
          </li>
          <li className="custom-bullet-list">
            use this website or its associated services in violation of any
            applicable laws or regulations;
          </li>
          <li className="custom-bullet-list">
            use this website in conjunction with sending unauthorized
            advertising or spam;
          </li>
          <li className="custom-bullet-list">
            harvest, collect, or gather user data without the user’s consent; or
          </li>
          <li className="custom-bullet-list">
            use this website or its associated services in such a way that may
            infringe the privacy, intellectual property rights, or other rights
            of third parties.
          </li>
        </ul>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Intellectual Property
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          The intellectual property in the materials contained in this website
          are owned by or licensed to Coding Brothers and are protected by
          applicable copyright and trademark law. We grant our users permission
          to download one copy of the materials for personal, non-commercial
          transitory use.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          This constitutes the grant of a license, not a transfer of title. This
          license shall automatically terminate if you violate any of these
          restrictions or the Terms of Service, and may be terminated by Coding
          Brothers at any time.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Liability
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Our website and the materials on our website are provided on an 'as
          is' basis. To the extent permitted by law, Coding Brothers makes no
          warranties, expressed or implied, and hereby disclaims and negates all
          other warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property, or other violation of
          rights.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          In no event shall Coding Brothers or its suppliers be liable for any
          consequential loss suffered or incurred by you or any third party
          arising from the use or inability to use this website or the materials
          on this website, even if Coding Brothers or an authorized
          representative has been notified, orally or in writing, of the
          possibility of such damage.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          In the context of this agreement, “consequential loss” includes any
          consequential loss, indirect loss, real or anticipated loss of profit,
          loss of benefit, loss of revenue, loss of business, loss of goodwill,
          loss of opportunity, loss of savings, loss of reputation, loss of use
          and/or loss or corruption of data, whether under statute, contract,
          equity, tort (including negligence), indemnity, or otherwise.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Accuracy of Materials
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          The materials appearing on our website are not comprehensive and are
          for general information purposes only. Coding Brothers does not
          warrant or make any representations concerning the accuracy, likely
          results, or reliability of the use of the materials on this website,
          or otherwise relating to such materials or on any resources linked to
          this website.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Links
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Coding Brothers has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement, approval,
          or control by Coding Brothers of the site. Use of any such linked site
          is at your own risk and we strongly advise you make your own
          investigations with respect to the suitability of those sites.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Right to Terminate
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We may suspend or terminate your right to use our website and
          terminate these Terms of Service immediately upon written notice to
          you for any breach of these Terms of Service.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Severance
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Any term of these Terms of Service which is wholly or partially void
          or unenforceable is severed to the extent that it is void or
          unenforceable. The validity of the remainder of these Terms of Service
          is not affected.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Governing Law
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          These Terms of Service are governed by and construed in accordance
          with the laws of United States. You irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
};

export default TermsofService;
