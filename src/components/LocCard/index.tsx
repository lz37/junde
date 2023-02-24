import style from './style.module.css'
import imgLocation from '@/assets/imgs/location.png'
import imgTel from '@/assets/imgs/call.png'
import imgEmail from '@/assets/imgs/email.png'
import DCard from '../DCard'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    tel: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => (
      <DCard class={style.card} mode="right">
        <div class={style.cardText}>
          <div class={style.title}>{props.title}</div>
          <div class={style.locationLine}>
            <div class={style.imgHolder}>
              <img src={imgLocation} alt="location" class={style.locationImg} />
            </div>
            <div class={style.locationText}>{props.location}</div>
          </div>
          <div class={style.telLine}>
            <div class={style.imgHolder}>
              <img src={imgTel} alt="tel" class={style.telImg} />
            </div>
            <div class={style.telText}>{props.tel}</div>
          </div>
          <div class={style.emailLine}>
            <div class={style.imgHolder}>
              <img src={imgEmail} alt="email" class={style.emailImg} />
            </div>
            <div class={style.emailText}>{props.email}</div>
          </div>
        </div>
        <img src={props.img} alt={props.title} class={style.leftImg} />
      </DCard>
    )
  }
})
