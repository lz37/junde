import { ElBacktop } from 'element-plus'
import img1075 from '@/assets/imgs/1075.png'

export default defineComponent({
  setup() {
    return () => (
      <ElBacktop bottom={100} style={{ width: '64px', height: '64px' }}>
        <img
          src={img1075}
          alt="1075"
          style={{
            transform: 'rotate(180deg)'
          }}
        />
      </ElBacktop>
    )
  }
})
