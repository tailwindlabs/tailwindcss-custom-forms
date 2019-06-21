import '../static/css/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import CodeBlock from './CodeBlock'

const components = {
  code: CodeBlock,
}

export default ({ meta, children }) => {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="max-w-3xl w-full mx-auto px-6 py-12">
        <MDXProvider components={components}>
          <div className="markdown">
            { children }
          </div>
        </MDXProvider>
      </div>
    </div>
  )
}
