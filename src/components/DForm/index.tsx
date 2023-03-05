import { ElCol, ElForm, ElFormItem, ElInput, ElRow } from 'element-plus'
import Button from '@/components/Button'
import { PostformDataDeal as PostFormDataDeal } from '@/api'

export default defineComponent({
  emits: ['submit'],
  setup(_, { emit }) {
    const form = reactive({
      name: '',
      companyName: '',
      email: '',
      telephone: '',
      need: ''
    })
    return () => (
      <ElForm style={{ marginTop: '23px' }} ref="form" model={form}>
        <ElRow>
          <ElCol span={11}>
            <ElFormItem>
              <ElInput v-model={form.name} placeholder="Name" />
            </ElFormItem>
            <ElFormItem>
              <ElInput v-model={form.companyName} placeholder="Company Name" />
            </ElFormItem>
            <ElFormItem>
              <ElInput v-model={form.email} placeholder="Email" />
            </ElFormItem>
            <ElFormItem>
              <ElInput v-model={form.telephone} placeholder="Telephone" />
            </ElFormItem>
          </ElCol>
          <ElCol span={1}></ElCol>
          <ElCol span={11}>
            <ElInput
              type="textarea"
              v-model={form.need}
              placeholder="What do you need?"
            />
          </ElCol>
        </ElRow>
        <ElRow style={{ marginTop: '48px' }}>
          <ElCol span={23}>
            <Button
              mode="red"
              style={{ width: '100%' }}
              onClick={async () => {
                const success = await PostFormDataDeal(form)
                if (success) {
                  // 跳转到页面顶部
                  form.name = ''
                  form.companyName = ''
                  form.email = ''
                  form.telephone = ''
                  form.need = ''
                  emit('submit')
                  window.scrollTo(0, 0)
                }
              }}
            >
              Send Message
            </Button>
          </ElCol>
        </ElRow>
      </ElForm>
    )
  }
})
