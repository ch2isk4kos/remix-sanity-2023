import React, { useState } from "react";
import { projectId, dataset, client } from "~/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { useLoaderData } from "@remix-run/react";

const builder = imageUrlBuilder({ projectId, dataset });

export const loader = async () => {
  const query = `*[_type == "author" && _ref == post.author_ref]{
    name
  }`;
  const author = await client.fetch(query);
  return { author };
};

export default function Post({ post }) {
  // console.log(post);
  const { title, mainImage, body, publishedAt } = post;

  const timestamp = Date(publishedAt);
  console.log("timestamp:", timestamp);

  const { author } = useLoaderData();
  console.log("author:", author);

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
