/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="mb-2 text-4xl font-semibold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-1 text-3xl font-semibold">{children}</h2>
      ),
      h3: ({ children }) => (
        <h2 className="mb-1 text-2xl font-semibold">{children}</h2>
      ),
      h4: ({ children }) => (
        <h2 className="mb-1 text-2xl font-semibold">{children}</h2>
      ),
      normal: ({ children }) => {
        return (
          <span className="text-xl leading-10 text-gray-900">{children}</span>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
