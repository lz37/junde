import { ElCol, ElForm, ElFormItem, ElInput, ElRow } from 'element-plus'
import Button from '@/components/Button'

export default defineComponent({
  setup() {
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
            <Button mode="red" style={{ width: '100%' }}>
              Send Message
            </Button>
          </ElCol>
        </ElRow>
      </ElForm>
    )
  }
})
