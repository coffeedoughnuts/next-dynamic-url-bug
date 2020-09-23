import React from 'react';
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  return <pre>{JSON.stringify(router.query, null, 2)}</pre>
}

export default Page

export async function getStaticPaths() {
  return {
    paths: [
      { params: { foo: 'helloWorld' } }
    ],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {},
  };
}