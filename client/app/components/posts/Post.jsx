import { useEffect, useState } from "react";
import { useParams } from "@remix-run/react";
import { projectId, dataset, client } from "~/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }) {
  // console.log(post);
  const [author, setAuthor] = useState("");
  const { slug } = useParams();
  const { title, mainImage, body, publishedAt } = post;
  const timestamp = Date(publishedAt);

  useEffect(() => {
    const query = `*[slug.current == "${slug}"]{
      "name": author->name
    }`;
    client
      .fetch(query)
      .then((arr) => {
        setAuthor(arr[0].name);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    // <main className="container mx-auto prose prose-lg p-4">
    <main className="Post">
      <div className="post-title">
        {/*  */}
        {title ? <h1>{title}</h1> : null}
      </div>
      <header className="post-header-img">
        {mainImage ? (
          <img
            // className="float-left m-0 w-1/3 mr-4 rounded-lg"
            className="rounded-lg"
            src={builder
              .image(mainImage)
              .width(300)
              .height(300)
              .quality(80)
              .url()}
            width={300}
            height={300}
            alt={title}
          />
        ) : null}
      </header>
      {/* Author */}
      <div className="post-author">{author ? <p>{author}</p> : null}</div>
      {/* Timestampe */}
      <div className="post-date">{timestamp ? <p>{timestamp}</p> : null}</div>
      {/* Paragraphs */}
      <div className="" style={{ border: "2px solid springGreen" }}>
        {body
          ? body.map((paragraph) => (
              <div
                className="paragraphs"
                key={paragraph._key}
                style={{ border: "2px solid crimson" }}
              >
                <PortableText value={paragraph} />
                <br />
              </div>
            ))
          : null}
      </div>
    </main>
  );
}
