import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home Page</Link>
        <br></br>
        Ir a <Link href="/about">About Page</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact.js</code>
      </p>
    </MainLayout>
  )
}