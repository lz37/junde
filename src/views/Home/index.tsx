import Menu from '@/views/Menu'
import Part1 from '@/views/Part1'
import Part2 from '@/views/Part2'

export default defineComponent({
  setup() {
    return () => (
      <>
        <Menu />
        <Part1 />
        <Part2 />
      </>
    )
  }
})
