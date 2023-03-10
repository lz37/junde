import Document from '@/components/Document'

export default defineComponent({
  setup() {
    return () => (
      <Document
        title="Terms Of Use"
        contents={[
          {
            title: 'Terms of Use',
            content: (
              <>
                Use of this website is subject to these “Terms and conditions”
                and any other rules or policies published on this website.
                Please read these Terms and Conditions carefully before using
                this site. By using this website, you agree to be bound by all
                of the terms and conditions described hereafter. Junde reserves
                the right to modify these Terms and Conditions at any time and
                without prior notice.
              </>
            )
          },
          {
            title: 'Servicesof Junde',
            content: (
              <>
                This site is owned and operated byJunde Software Inc. The site
                provides online information on services offered by Junde
                Software Inc.
              </>
            )
          },
          {
            title: 'Copyright,Restrictions and Use',
            content: (
              <>
                The contents displayed on this website, including but not
                limited to text, graphics, animations, logos, and trademarks,
                are the property of Junde Software Inc. and/or its customers and
                are protected by copyright, trademark, patent and other
                intellectual property laws. You may not use, modify, adapt, or
                in any way alter these materials and contents without the
                permission of Junde Software Inc. You agree not to use any
                contact information and e-mail addresses that can be found on
                the website to send any unsolicited commercial information. This
                website may contain links to other sites. Junde Software Inc.
                does not monitor these other sites and is not responsible for
                the contents of such sites. Your access to such sites via the
                links contained on this website is wholly at your own risk.
              </>
            )
          },
          {
            title: 'Junde PaymentProcedures',
            content: (
              <>
                All services are provided according to individual agreements and
                contracts signed with customers. Once such individual
                arrangements have been made, we invoice for the services after
                deliveries have been made. Detailed conditions of payments are
                set in individual agreements. All payments are made based on
                invoices of Junde Software Inc. We accept payments by Bank wire
                transfer, check and credit card in all major currencies. All
                necessary information like wiring instructions in case of wire
                transfer or accessing our payment web page in case of credit
                card payment is advised when invoices are sent. All invoices
                should be approved by customers and, consequently, we do not
                have situations when Junde would have to refund payments made.
              </>
            )
          },
          {
            title: 'PersonalInformation',
            content: (
              <>
                Junde has a very strict non-misuse policy and does not collect
                any personal information on this website. Any personal
                information voluntarily disclosed by you on this website will
                never be abused or sold to any third party. All information is
                strictly confidential and will not be used for any purpose other
                than to accurately serve you and your business.
              </>
            )
          }
        ]}
      />
    )
  }
})
