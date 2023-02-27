import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = '/api/contactus'
export const PostformDataDeal = async (form: {
  name: string
  companyName: string
  email: string
  telephone: string
  need: string
}) => {
  const {
    name,
    companyName: company,
    email,
    telephone: phone,
    need: content
  } = form
  try {
    const { data } = await axios.post<{ status: 0 | 1; msg: string }>(baseURL, {
      name,
      company,
      email,
      phone,
      content
    })
    if (data.status === 1) {
      ElMessage.success('Thank you!')
      return true
    } else {
      console.error(data.msg)
      ElMessage.error(data.msg)
      return false
    }
  } catch (error) {
    console.error(error)
    ElMessage.error(error as Error)
    return false
  }
}
