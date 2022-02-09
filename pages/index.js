// pages/index.js

import {getPosts} from "../lib/functions";
import formatDate from "../lib/utils/formatDate";
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

const Home = (props) => (
  <div className="m-5">
    <Head>
      <title>Adela&apos;s Learning Blog</title>
    </Head>
    <div className="uppercase relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
    ------------ still under construction ------------
    </div>
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="font-bold  text-3xl leading-12 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              Hey, I&apos;m Adela! 
            </h1>
            <p className="text-base leading-7 text-gray-800 dark:text-gray-400">
            Developer Relations at Bytebase. I&apos;ll learn and share here. </p>
          </div>
      </div>
    </div>
    <main>

      <h1 className='text-l font-semibold font-sans'>Home / Hey there! Nice to see you here</h1>
      <ul>
        {props.posts.map((post) => (
          <li className="max-w-3xl bg-stone-100 overflow-hidden md:max-w-3xl mb-5 mt-2" key={post.id}>
            <div className="md:flex relative">
              <div className="uppercase text-xs p-3 left-0 top-0 -ml-20 z-50 -rotate-90 absolute w-48 mt-20 text-gray-600">
                {formatDate(post.published_at)}
              </div>
              <div className="p-5"></div>
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
    ------------ still under construction ------------
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
