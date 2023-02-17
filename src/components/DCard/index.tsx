import { PropType } from 'vue'
import style from './style.module.css'
import ConstructionPic from '@/assets/imgs/Construction.png'
import ECommercePic from '@/assets/imgs/E-Commerce.png'
import EducationPic from '@/assets/imgs/Education.png'
import EngineeringPic from '@/assets/imgs/Engineering.png'
import FinancialPlatformPic from '@/assets/imgs/Financial_Platform.png'
import SelfStorageManagementPic from '@/assets/imgs/Self-storage_Management.png'
import SportsPic from '@/assets/imgs/Sports.png'

export type IconsTitle =
  | 'Construction'
  | 'E-Commerce'
  | 'Education'
  | 'Engineering'
  | 'Financial Platform'
  | 'Self-storage Management'
  | 'Sports'

const picsTable: Record<IconsTitle, string> = {
  'E-Commerce': ECommercePic,
  Construction: ConstructionPic,
  'Financial Platform': FinancialPlatformPic,
  'Self-storage Management': SelfStorageManagementPic,
  Education: EducationPic,
  Sports: SportsPic,
  Engineering: EngineeringPic
}

export default defineComponent({
  props: {
    title: {
      type: String as PropType<IconsTitle>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div class={style.card}>
        <div class={style.iconPlace}>
          <img src={picsTable[props.title]} alt={style.title} />
        </div>
        <p class={style.title}>{props.title}</p>
      </div>
    )
  }
})
