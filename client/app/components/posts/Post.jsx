import React, { useMemo } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { projectId, dataset } from "~/lib/sanity";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }) {
  // console.log(post);
  const { title, mainImage, body, publishedAt, author } = post;

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
      <div className="post-date">
        {publishedAt ? <p>{publishedAt}</p> : null}
      </div>
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
