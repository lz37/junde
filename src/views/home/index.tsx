import Menu from '@/components/Menu'
import Trans from '@/components/Trans'

export default defineComponent({
  setup() {
    return () => (
      <>
        <Menu />
        <Trans>
          <div
            style={{
              padding: '30px',
              minHeight: '100px',
              maxWidth: '200px'
            }}
          >
            JUNDE's ODC is a tested and proven method that could speed up hiring
            process, be your trusted and strategic software development partner.
          </div>
        </Trans>
      </>
    )
  }
})
