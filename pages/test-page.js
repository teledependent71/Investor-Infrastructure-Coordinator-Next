import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Investor Infrastructure Coordinator</title>
          <meta
            property="og:title"
            content="test-page - Investor Infrastructure Coordinator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_0l0mfq) => (
            <>
              <h1>{context_0l0mfq?.Name}</h1>
            </>
          )}
          initialData={props.context0l0mfqProp}
          persistDataDuringLoading={true}
          key={props?.context0l0mfqProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context0l0mfqProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        context0l0mfqProp: context0l0mfqProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
