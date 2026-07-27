import { graphClient } from './client'

export const sendMail = async (formData: FormData) => {
  'use server'

  const email = formData.get('email') as string

  const to = formData.get('to') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  const sendMail = {
    message: {
      subject: subject,
      body: {
        contentType: 'text',
        content: 'mailto:' + email + '\n\n' + message,
      },
      from: {
        emailAddress: {
          address: process.env.EMAIL_SENDER!,
        },
      },
      toRecipients: [{ emailAddress: { address: to } }],
    }
  }

  console.log(sendMail)

  const response = await graphClient.api(`/users/${process.env.EMAIL_SENDER!}/sendmail`).post(sendMail)

  return response
}
