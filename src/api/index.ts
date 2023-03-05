import axios from 'axios'

const baseURL = 'https://www.jundesoftware.com/api/contactus'
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
      return true
    } else {
      console.error(data.msg)
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
