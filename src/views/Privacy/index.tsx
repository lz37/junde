import Document from '@/components/Document'

export default defineComponent({
  setup() {
    return () => (
      <Document
        title="Privacy Policy"
        contents={[
          {
            content: (
              <>
                Junde Software Inc. is absolutely committed to your privacy in
                any aspect and guards your personal and business information to
                the best of our capabilities. We know and see that the great and
                exciting growth of the Internet and all the types of online
                services has also brought reasonable concern for consumers about
                what information is collected, distributed and available about
                them, and we want you to be sure that we always consider and
                work with that diligent and honest commitment to all of our
                Internet activities. Junde Software Inc. uses your information
                to help us understand your needs and interests and provide you
                with better services. Specifically, we use your information to
                help you complete a transaction or order, to communicate with
                you, to provide service and support, to update you on services
                and benefits, and to personalize promotional offers.
                Occasionally we may also use your information to contact you for
                market research regarding Junde products or services. We do not
                and will not provide any of your personal or business
                information to other companies or individuals without your
                specific request and permission.
              </>
            )
          },
          {
            title: 'Web site logs',
            content: (
              <>
                Anonymous (non-personal) data, such as IP addresses, is
                aggregated for reporting about the / Web site usability,
                performance, and effectiveness. It is used to improve the
                customer experience, usability, and site content.
              </>
            )
          },
          {
            title: 'Secruity',
            content: (
              <>
                Junde is committed to ensuring the security of your information.
                To prevent unauthorized access or disclosure, maintain data
                accuracy, and ensure the appropriate use of the information,
                Junde has appropriate physical, managerial procedures to
                safeguard the information we collect. If you wish to obtain more
                information regarding Junde???s privacy policy, please contact us.
              </>
            )
          }
        ]}
      />
    )
  }
})
