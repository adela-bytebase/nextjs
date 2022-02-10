// pages/posts/[slug].js

import { getSinglePost, getPosts } from "../../lib/functions";
import Link from "next/link";
import formatDate from "../../lib/utils/formatDate";

const PostPage = (props) => {
  return (

  <div className="container-ctm">

        <Link href={`/`}>
        <a className='text-xs uppercase block p-5 pl-0'>back to <span className="font-semibold">Home</span> </a>
                </Link>
    <div>
      <h1 className="font-bold mb-4  text-5xl leading-12 ">{props.post.title}</h1>
      <div className="uppercase text-sm text-gray-700 font-semibold pb-2">
              {props.post.reading_time} min Reading - {formatDate(props.post.published_at)}
       </div>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      <img className="w-full mt-4" src={props.post.feature_image} />
    </div>
  </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // "fallback: false" gives us a 404 if post not found
  return { paths, fallback: false };
}

// Pass the page slug to "getSinglePost()" function
// Which then passes it to "posts.read()" to query the GhostContentAPI
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
