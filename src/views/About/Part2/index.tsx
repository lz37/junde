import Background from '@/components/Background'
import DCard from '@/components/DCard'
import style from './style.module.css'
import img48 from '@/assets/imgs/48.png'
import img49 from '@/assets/imgs/49.png'
import img50 from '@/assets/imgs/50.png'
import DImage from '@/components/DImage'

export default defineComponent({
  setup() {
    return () => (
      <Background mode="light">
        <div class={style.title}>
          We believe in <b>the loyalty of employee</b> will achieve the loyalty
          of our clients.
        </div>
        <div class={style.holder} style={{ marginTop: '80px' }}>
          <DImage
            class={style.img}
            forward="right"
            img={img48}
            size={{ h: '480px', w: '754px' }}
            style={{ left: '392px' }}
          />
          <DCard mode="right" class={style.card} style={{ top: '143px' }}>
            <div class={style.cardTitle}>
              <b>Effective-oriented</b> software development mindset
            </div>
            <div class={style.cardContent}>
              Agile mindset is the foundation of how we do the work, and we are
              working hard for tech excellence, business-oriented approach to
              resolve the issue, and focusing on the value
            </div>
          </DCard>
        </div>
        <div class={style.holder} style={{ marginTop: '80px' }}>
          <DImage
            class={style.img}
            forward="left"
            img={img49}
            size={{ h: '480px', w: '754px' }}
          />
          <DCard
            mode="left"
            class={style.card}
            style={{ top: '143px', left: '588px' }}
          >
            <div class={style.cardTitle}>
              <b>People first</b>
            </div>
            <div class={style.cardContent}>
              If we make the developer to be satisfied, then the developer will
              make our clients satisfied. We build an open and free environment
              so the development work could be done
            </div>
          </DCard>
        </div>
        <div class={style.holder} style={{ marginTop: '80px' }}>
          <DImage
            class={style.img}
            forward="right"
            img={img50}
            size={{ h: '480px', w: '754px' }}
            style={{ left: '392px' }}
          />
          <DCard mode="right" class={style.card} style={{ top: '143px' }}>
            <div class={style.cardTitle}>
              <b>Customer collaboration</b> over contract negotiation
            </div>
            <div class={style.cardContent}>
              We are following this Agile Manifesto. It effectively makes us as
              a trustable partner to our clients and plays as extension to our
              client’s development capability.
            </div>
          </DCard>
        </div>
      </Background>
    )
  }
})
