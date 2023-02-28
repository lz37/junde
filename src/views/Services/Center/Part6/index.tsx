import Background from '@/components/Background'
import QuestionsCop from '@/components/QuestionsCop'
import style from './style.module.css'

const questionsInfos: { q: JSX.Element; a: JSX.Element }[] = [
  {
    q: (
      <>
        How much dose it <b>cost</b> to <b>hire a developer</b>?
      </>
    ),
    a: (
      <>
        You only need to pay for the developers you hire, with the rates range
        from $45 - $70/hour. There will be no overhead fees, no matter how big
        the team you have built is, and the developers will work for you
        full-time, 8 hours per day, 40 hours per week.
      </>
    )
  },
  {
    q: (
      <>
        How does JUNDE <b>finds its developers</b>?
      </>
    ),
    a: (
      <>
        JUNDE hires developers and have them as employees for permanent
        positions. We want to grow with all our employees continuously. It
        sometimes may slow the process of expanding the team, but all what we
        provide are best.
      </>
    )
  },
  {
    q: (
      <>
        How to <b>maintain the stability</b> of the team and{' '}
        <b>ensure the business value</b>
        for clients?
      </>
    ),
    a: (
      <>
        Of the fees paid by the client, 60% will be directly used for the
        developers' salaries and insurance, and the rest will be used for
        developers' idle time, marketing, management costs and profits. JUNDE
        has established an internal platform to combine the interests of the
        client and developers, so that the developers can directly create values
        for the client and obtain corresponding benefits. The platform enables
        the improvements of developers' abilities to be reflected in their
        hourly rates, and also enables the developers to work for themselves
        rather than for JUNDE.
      </>
    )
  },
  {
    q: (
      <>
        Can I <b>test the services</b> before committing to long-term
        engagement?
      </>
    ),
    a: (
      <>
        You can test the services of JUNDE before committing to long-term
        engagement by taking our 1-week free trial. Our agile software
        developers have worked with 100+ clients globally and still counting.
        JUNDE offers a 1-week trial to all our clients worldwide. This is to
        give our potential clients a risk-free way to try our software
        development services before committing to long-term engagement. We
        strongly believe in our services and want to allow every client to
        experience firsthand value we can bring. The best part is there’s no
        obligation to continue working together. We want to let you see the
        results and decide if we’re the right fit. Just fill out a form and
        connect with our account manager immediately. We hope you’ll take
        advantage of this and give us a chance to show you what we can do.
      </>
    )
  },
  {
    q: (
      <>
        Do you offer <b>refunds or a money back guarantee</b>?
      </>
    ),
    a: (
      <>
        Client satisfaction is the top priority at JUNDE. We provide a 100%
        money-back guarantee if you are not satisfied with your project. Also,
        you can change your team or any specific developer with JUNDE, if you
        are not happy with their performance.
      </>
    )
  },
  {
    q: (
      <>
        How do you ensure <b>IP</b> (Intellectual Property) and{' '}
        <b>data protection</b>?
      </>
    ),
    a: (
      <>
        Software product development outsourcing is not risky at all if you
        outsource your project to a reliable company. JUNDE ensures IP& data
        protection in the following ways:
        <ul style={{ marginTop: '0px' }}>
          <li>We sign a Non-Disclosure Agreement (NDA)</li>
          <li>We meet special industry regulations etc.</li>
          <li>We follow secure coding and data protection practices</li>
          <li>
            We establish firewalls, encryption, and VPN services to prevent
            online security breaches
          </li>
          <li>All our employees are strictly verified before recruitment</li>
        </ul>
      </>
    )
  },
  {
    q: (
      <>
        What happens if I am <b>not satisfied</b> with the performance of the
        hired developers?
      </>
    ),
    a: (
      <>
        During the project management, you hire developers as per your project
        requirements and have complete control over them. If you experience any
        performance issues with our developers, you can escalate the problems to
        the project manager or account manager. The project manager or the
        account manager from our side will first perform the gap analysis, try
        to identify the concerns, and resolve them mutually and still if the
        problem persists with a specific dedicated team member, we will replace
        the developer.
      </>
    )
  },
  {
    q: (
      <>
        How to help customers <b>track hours spent</b>?
      </>
    ),
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    )
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="none" id="services-center-qa">
        <div class={style.title}>Frequently asked questions</div>
        <QuestionsCop questions={questionsInfos} />
      </Background>
    )
  }
})
