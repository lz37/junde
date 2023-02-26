import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './part3'
import Part4 from './part4'
import Part5 from './part5'
import Part6 from './Part6'
import style from './style.module.css'

export default defineComponent({
  setup() {
    return () => (
      <div class={style.home}>
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
