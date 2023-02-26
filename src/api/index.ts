import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://www.shinetechchina.com.cn/form/formDataDeal.php'
export const PostformDataDeal = async (form: {
  name: string
  companyName: string
  email: string
  telephone: string
  need: string
}) => {
  const { name, companyName, email, telephone, need } = form
  try {
    const { data } = await axios({
      baseURL,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      withCredentials: true,
      data: encodeURI(
        [
          `submitted[contact]=${name}`,
          `submitted[company]=${companyName}`,
          `submitted[email]=${email}`,
          `submitted[telephone]=${telephone}`,
          `page_title=case_study_VR`,
          `submitted[description]=${need}`
        ].join('&')
      )
    })
    console.log(data)
    if (data === 'success') {
      window.location.href = 'http://www.shinetechchina.com.cn/thanks.shtml'
    } else {
      ElMessage.error(
        'There is a problem with the message board temporarily, but the information you entered has been included, please contact 400029 0219 directly, we will reply you as soon as possible!'
      )
    }
  } catch (error) {
    console.error(error)
    ElMessage.error(
      'There is a problem with the message board temporarily, but the information you entered has been included, please contact 400029 0219 directly, we will reply you as soon as possible!'
    )
  }
}
