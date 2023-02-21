import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './part3'
import Part5 from './part5'
import Part6 from './part6'
import Part7 from './Part7'
import style from './style.module.css'

export default defineComponent({
  setup() {
    return () => (
      <div class={style.home}>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part5 />
        <Part6 />
        <Part7 />
      </div>
    )
  }
})
