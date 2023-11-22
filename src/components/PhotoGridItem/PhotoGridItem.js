import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Image = ({ src, alt }) => {
  const jpgSrc = src;
  const jpg2xSrc = src.replace(/.jpg$/, '@2x.jpg');
  const jpg3xSrc = src.replace(/.jpg$/, '@3x.jpg');
  const avifSrc = src.replace(/.jpg$/, '.avif');
  const avif2xSrc = src.replace(/.jpg$/, '@2x.avif');
  const avif3xSrc = src.replace(/.jpg$/, '@3x.avif');

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${avifSrc} 1x, ${avif2xSrc} 2x, ${avif3xSrc} 3x`}
      />
      <source
        type="image/jpeg"
        srcSet={`${jpgSrc} 1x, ${jpg2xSrc} 2x, ${jpg3xSrc} 3x`}
      />
      <Img src={jpgSrc} alt={alt} />
    </picture>
  )
}

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Img = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  overflow: hidden;
  display: block;
`;

const Tag = styled.li`
  &:not(:first-child) {
    margin-left: 8px;
  }

  display: inline;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
