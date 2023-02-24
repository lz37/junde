import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import Part4 from './Part4'
import Part5 from './Part5'
import Part6 from './Part6'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Part6 />
      </div>
    )
  }
})
