import '../static/css/tailwind.css'
import React from 'react'
import innerText from 'react-innertext'
import paramCase from 'param-case'
import takeWhile from 'lodash/takeWhile'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import CodeBlock from './CodeBlock'

function H2(props) {
  return <h2 id={paramCase(innerText(props.children))} {...props}/>
}

const components = {
  code: CodeBlock,
  h2: H2,
}

function nestHeadings(headings, level = 1, stopAt = Infinity) {
  if (level > stopAt) {
    return headings
  }

  const group = headings.reduce((group, heading) => {
    if (group.length === 0 || heading.level <= level) {
      return [...group, [heading]]
    }

    return [
      ...group.slice(0, -1),
      [
        ...group[group.length - 1],
        heading
      ]
    ]
  }, [])

  return group.map(([ heading, ...children]) => {
    return {
      heading,
      children: nestHeadings(children, level + 1, Math.max(...children.map(h => h.level)))
    }
  })
}

function TableOfContents({ headings }) {
  return (
    <ol>
      {
        headings.map(({ heading, children }, i) => (
          <li key={i} className={`mt-2 ${heading.level > 2 ? 'pl-4' : ''}`}>
            <p><a href={`#${paramCase(heading.text)}`} className="font-bold">{ heading.text }</a></p>
            {
              children.length > 0 && <TableOfContents headings={children}/>
            }
          </li>
        ))
      }
    </ol>
  )
}

export default ({ meta, children }) => {
  const headings = children.filter(node => {
    return ['h2'].includes(node.props.originalType)
  }).map(node => {
    return {
      level: { h2: 2, h3: 3, h4: 4 }[node.props.originalType],
      text: innerText(node),
    }
  })

  const nested = nestHeadings(headings, 2)

  console.log(React.Children.toArray(children))

  return (
    <div className="antialiased text-gray-900 px-8">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="">
        <div className="flex items-start -mx-4">
          <div className="sticky top-0 px-4 py-16 max-w-xs w-full flex-shrink-0 h-screen overflow-y-auto">
            <TableOfContents headings={nested}/>
          </div>
          <div className="px-4 py-16 flex-1 min-w-0">
            <div className="max-w-3xl mx-auto">
              <MDXProvider components={components}>
                <div className="markdown">
                  { children }
                </div>
              </MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
