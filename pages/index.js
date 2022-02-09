// pages/index.js

import { getPosts } from "../lib/functions";
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

const Home = (props) => (
  <div>
    <Head>
      <title>Adela&apos;s Learning Blog</title>
    </Head>
    <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
    lalalalal
    </div>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-bold  text-4xl leading-12 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hey, I&apos;m Adela! 
          </h1>
          <p className="text-base leading-7 text-gray-800 dark:text-gray-400">
          Developer Relations at Bytebase. I&apos;ll learn and share here. </p>
        </div>
      </div>
    <main>

      <h1 className='text-l font-semibold font-sans'>Home / Hey there! Nice to see you here</h1>
      <ul>
        {props.posts.map((post) => (
          <li className="max-w-3xl bg-stone-100 overflow-hidden md:max-w-3xl m-10" key={post.id}>
            <div className="md:flex">

            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {post.tags}aaa
                </div>
              <div className="md:shrink-0">
                 <Image width="300" height="200" className="h-48 w-full object-cover md:h-full md:w-48" src={post.feature_image} />
              </div>
              <div className="p-7 overflow-hidden ml-3">

                <Link href={`/posts/${post.slug}`}>
                 <a className="block text-2xl leading-tight font-bold hover:underline text-gray-900"> {post.title} </a>
                </Link>
                <p className="mt-2 text-gray-600 text-sm ">
                  {post.custom_excerpt}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
    <footer>
      this is the footer

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </footer>
  </div>
);

export default Home;

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}
