// pages/index.js

import {getPosts} from "../lib/functions";
import formatDate from "../lib/utils/formatDate";
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

const Home = (props) => (
  <div className="container-ctm">
    <Head>
      <title>Adela&apos;s Learning Fun</title>
  <script defer data-domain="adela.fun" src="https://plausible.io/js/plausible.js"></script>

    </Head>
    <div className="uppercase relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
   
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
                <a target="_blank" className="flex py-1 px-2 md:py-3 md:px-5 text-sm font-semibold float-left rounded-full bg-blue-600 hover:bg-blue-400 text-white">
                <svg t="1644483398423" className="w-0 h-0 md:w-5 md:h-5 white fill-current md:mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3610" width="200" height="200"><path d="M864 332.8c2.133 4.267 2.133 12.8 2.133 23.467 0 83.2-19.2 164.266-59.733 241.066-42.667 81.067-100.267 147.2-174.933 196.267-81.067 53.333-177.067 81.067-281.6 81.067-102.4 0-194.134-27.734-279.467-81.067 12.8 2.133 27.733 2.133 42.667 2.133 85.333 0 160-25.6 226.133-78.933-40.533 0-76.8-12.8-106.667-36.267s-51.2-53.333-64-89.6c10.667 2.134 23.467 2.134 32 2.134 17.067 0 32-2.134 49.067-4.267-40.533-8.533-76.8-29.867-104.533-64s-40.534-72.533-40.534-115.2v-4.267c25.6 14.934 53.334 23.467 81.067 23.467-23.467-17.067-44.8-38.4-59.733-66.133-14.934-25.6-23.467-55.467-23.467-87.467s8.533-61.867 25.6-91.733c44.8 57.6 100.267 102.4 166.4 134.4s134.4 51.2 209.067 55.466c-2.134-12.8-4.267-27.733-4.267-40.533 0-32 8.533-61.867 23.467-91.733s38.4-51.2 66.133-66.134c29.867-12.8 59.733-21.333 93.867-21.333 25.6 0 51.2 4.267 74.666 14.933C780.8 179.2 800 192 817.067 211.2c42.666-8.533 81.066-23.467 115.2-42.667-12.8 42.667-40.534 76.8-78.934 100.267 34.134-4.267 68.267-14.933 104.534-29.867C930.133 275.2 900.267 307.2 864 332.8z" p-id="3611" fill="#ffffff"></path></svg>
                 Twitter
                </a> 
              </Link>
              <Link href="https://github.com/adela-bytebase">
                <a target="_blank" className="flex ml-3 py-1 px-3 md:ml-4 md:py-3 md:px-5 text-sm font-semibold float-left rounded-full bg-gray-800 hover:bg-gray-600 text-white">
                <svg t="1644482973397" width="24" height="24" viewBox="5 15 1024 1000" className="w-0 h-0 md:w-5 md:h-5 white fill-current md:mr-2" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2349"><path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" p-id="2350" fill="#ffffff"></path></svg>
                GitHub
                </a> 
              </Link>
            </div> 
          </div>
          <div className="shrink-1 w-60 md:w-auto md:shrink-0 md:-mt-10 border-none">
            <Image width={320} height={320} src="/adela_white_bg.png"></Image>
          </div>
      </div>
    </div>


    <main>
      <div className='text-xs uppercase'>Home / <span className="font-semibold">I&apos;ll learn and share here. It&apos;ll be fun!</span> </div>
      <ul className="mt-3">
        {props.posts.map((post) => (
          <li className="max-w-4xl bg-zinc-100 overflow-hidden md:max-w-4xl mb-5" key={post.id}>
            <div className="md:flex relative">
              <div className=" text-gray-500 uppercase w-ctm text-xs p-5 z-50 -mt-2 absolute left-0 top-0 ml-0 md:-ml-20 md:-rotate-90 md:mt-20">
                <span className="font-bold text-gray-600">{post.reading_time} min</span> - {formatDate(post.published_at)}
              </div>
              <div className="p-ctm"></div>
              <div className="w-full md:shrink-0 md:w-80 md:-mb-2">
                 <Image width="750" height="500" className="w-full h-48 object-cover md:h-full md:w-24" src={post.feature_image} />
              </div>
              <div className="p-5 md:p-5 md:max-h-44 overflow-hidden md:ml-3">

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
    <footer className="border-t-2 mt-10">
      <div className="py-4 px-2">
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-sm text-gray-400">&copy; 2022 adela.fun</p>
        </div>
      </div>
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
