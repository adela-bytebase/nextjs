// pages/index.js

import {getPosts} from "../lib/functions";
import formatDate from "../lib/utils/formatDate";
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

const Home = (props) => (
  <div className="container-ctm">
    <Head>
      <title>Adela&apos;s Learning Blog</title>
    </Head>
    <div className="uppercase relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
    ------------ still under construction ------------
    </div>
    <div>
      <div className="flex justify-between divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 mb-4 md:space-y-5 md:flex:1">
            <h1 className="font-bold  text-3xl leading-12 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              Hey, I&apos;m Adela! 
            </h1>
            <h1 className="font-semibold  text-base leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-8">
              Developer Advocate at Bytebase.
            </h1>
            <div className="pt-2 md:pt-3">
              <Link href="https://twitter.com/adela_bytebase">
                <a target="_blank" className="block py-1 px-2 md:py-3 md:px-5 text-sm font-semibold float-left rounded-full bg-blue-600 hover:bg-blue-400 text-white">Twitter</a> 
              </Link>
              <Link href="https://twitter.com/adela_bytebase">
                <a target="_blank" className="ml-3 block py-1 px-3 md:ml-5 md:py-3 md:px-5 text-sm font-semibold float-left rounded-full bg-gray-800 hover:bg-gray-600 text-white">GitHub</a> 
              </Link>
            </div> 
          </div>
          <div className="shrink-1 w-48 md:w-auto md:shrink-0 md:-mt-12 border-none">
            <Image width={320} height={320} src="https://adela-learning-blog-2022-5jx9.onrender.com/content/images/2022/02/adela_white_bg.png"></Image>
          </div>
      </div>
    </div>
    <main>

      <div className='text-xs uppercase'>Home / <span className="font-semibold">I&apos;ll learn and share here.</span> </div>
      <ul className="mt-3">
        {props.posts.map((post) => (
          <li className="max-w-4xl bg-stone-100 overflow-hidden md:max-w-4xl mb-5" key={post.id}>
            <div className="md:flex relative">
              <div className="uppercase text-xs p-5 z-50 -mt-2 absolute left-0 top-0 md:-ml-20 md:-rotate-90 md:w-ctm md:mt-20 text-gray-500">
                <span className="font-bold text-gray-600">{post.reading_time} min</span> - {formatDate(post.published_at)}
              </div>
              <div className="p-ctm"></div>
              <div className="w-full md:shrink-0 md:w-80">
                 <Image width="750" height="500" className="w-full h-48 object-cover md:h-full md:w-24" src={post.feature_image} />
              </div>
              <div className="p-5 md:p-6 overflow-hidden md:ml-3">

                <Link href={`/posts/${post.slug}`}>
                 <a className="block text-2xl md:text-2xl leading-tight font-bold hover:underline text-gray-900 hover:text-blue-600"> {post.title} </a>
                </Link>
                <p className="mt-3 text-gray-600 text-sm md:text-sm">
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
