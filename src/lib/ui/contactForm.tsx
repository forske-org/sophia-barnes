import { sendMail } from '@/lib/msGraph'

import styles from './contactForm.module.scss'

export default function ContactForm () {
  async function handleSubmit (formData: FormData) {
    'use server'

    const name = formData.get('name') as string

    formData.set('subject', `Website Editing Inquiry: ${name}`)
    formData.set('to', process.env.EMAIL_RECIPIENT! || 'sophia.h.barnes@gmail.com')

    await sendMail(formData)
  }

  return (
    <form action={handleSubmit} className={styles.form}>
      <input type='text' name='name' id='name' placeholder='Name' />
      <input type='email' name='email' id='email' placeholder='Email' />
      <textarea name='message' id='message' placeholder='Message' />
      <button type='submit'>Send</button>
    </form>
  )
}
