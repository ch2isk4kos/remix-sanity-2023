import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { projectId, dataset } from "~/lib/sanity";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }) {
  const { title, mainImage, body } = post;

  const paragraphs = body.forEach(
    (paragraph) => (paragraph.children[0].text += "\n")
  );

  return (
    // <main className="container mx-auto prose prose-lg p-4">
    <main className="">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <img
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
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
      {body ? <PortableText value={body} /> : null}
    </main>
  );
}
