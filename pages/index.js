// pages/index.js

import { getPosts } from "../lib/functions";
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'

const Home = (props) => (
  <div>
    <Head>
      <title>Adela's Learning Blog</title>
    </Head>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
hello          </p>
        </div>
      </div>
    <main>

      <h1 className='text-3xl font-bold font-serif'>The blogs</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
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
