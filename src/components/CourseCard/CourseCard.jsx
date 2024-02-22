import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: 260px;
  height: 125px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  justify-items: end;
  margin: auto;

  &:hover {
    img {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  }

  @media screen and (min-width: 425px) {
    width: 225px;
    height: 118px;
  }
`;

const ImageWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  overflow: hidden;
`;

const Text = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  h3 {
    width: fit-content;
    padding: 0.5rem;
    border-radius: 5%;
    background: #00000062;
    z-index: 100;
  }
  h3 a {
    color: white;
  }
`;
export default function CourseCard({ name, image, alt, slug }) {
  const handleClick = () => {
    window.location.href = `kurser/${slug}`;
  };
  return (
    <Wrapper onClick={handleClick} className='noHover'>
      <ImageWrapper>
        {image ? (
          <Image src={image} alt={alt} layout='fill' objectFit='cover' />
        ) : null}
      </ImageWrapper>
      <Text>
        <h3>{slug ? <Link href={`kurser/${slug}`}>{name}</Link> : null}</h3>
      </Text>
    </Wrapper>
  );
}