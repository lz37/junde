import { ElDialog } from 'element-plus'
import DForm from '@/components/DForm'
import style from './style.module.css'

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const { visible } = toRefs(props)
    return () => (
      <ElDialog
        width="853px"
        v-model={visible.value}
        beforeClose={() => emit('close')}
        class={style.dialog}
      >
        <div class={style.title}>Leave us a message</div>
        <div class={style.subTitle}>
          Tell us how we can assist you and one of our experienced thought
          leaders will get in touch shortly.
        </div>
        <DForm></DForm>
      </ElDialog>
    )
  }
})
