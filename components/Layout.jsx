import '../static/css/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'

export default ({ meta, children }) => {
  return (
    <div class="antialiased text-gray-900">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="max-w-3xl w-full mx-auto px-6 py-12">
        <div className="markdown">
          { children }
        </div>
      </div>
    </div>
  )
}
