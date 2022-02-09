// pages/index.js

import { getPosts } from "../lib/functions";
import Link from "next/link";

const Index = (props) => (
  <ul>
  <h1 className='text-3xl font-bold font-serif'>The blogs</h1>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Index;

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
