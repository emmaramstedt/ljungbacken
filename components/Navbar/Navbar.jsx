import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

svg{
  color: black;
  margin-top: 0;
  width: 30px;
  height: 30px;
}

.parentLink{
  color: #000000 !important;
}

@media screen and (max-width: 767px) {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #dee2e7;
    }
    ::-webkit-scrollbar-thumb {
      background: #aac2da;
    }
    #menu-btn:checked ~ .nav-links {
      right: 0%;
    }
    #menu-btn:checked ~ .btn.menu-btn {
      display: none;
    }
    #close-btn:checked ~ .btn.menu-btn {
      display: block;
    }
    #showDrop:checked ~ .drop-menu,
    #showDrop2:checked ~ .drop-menu,
    #showMega:checked ~ .mega-box
     {
      max-height: 100%;
    }
  }

`;

const Nav = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: white;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 4.3rem;
  line-height: 1.7rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    display: none;
  }
`;

const Logo = styled.div`
  a {
    color: #000000;
    font-size: 1.875rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Audrey-Normal';
  }
`;

//mobile-item
const MobileItem = styled.label`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    color: #000000;
    font-size: 1.25rem;
    font-weight: 300;
    padding-left: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &hover {
      background: #aac2da;
    }
  }
`;

const DropMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #dee2e7;
  width: 11rem;
  line-height: 1.7rem;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transition-delay: 0.2s;

  &.last {
    right: 0;
  }
  li a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 0 0 0 15px;
    font-weight: 300;
    font-size: 0.8rem !important;
  }

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;

    li {
      margin: 0;
    }
    li a {
      font-size: 1.125rem;
    }
  }
`;

const MegaBox = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 30px;
  top: 4rem;
  opacity: 0;
  visibility: hidden;
  transition-delay: 0.2s;

  @media screen and (max-width: 767px) {
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;
const NavLinks = styled.ul`
  display: inline-flex;

  li {
    list-style: none;
  }

  li a {
    color: #565759;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 15px;
    display: inline-block;
    position: relative;
  }

  li a:hover {
  }

  li a::after {
    display: block;
    content: '';
    border-bottom: solid 1px black;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  li a:hover::after {
    transform: scaleX(1);
  }

  li:hover ${DropMenu}, li:hover ${MegaBox} {
    transition: all 0.3s ease;
    top: 4rem;
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    right: -100%;
    background: #dee2e7;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
    li {
      margin: 0.4rem 0.3rem;
    }
    li a {
      padding: 0 20px;
      display: block;
      font-size: 1.25rem;
    }
  }
`;
const Content = styled.div`
  background: #dee2e7;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 767px) {
    box-shadow: none;
    flex-direction: column;
    padding: 0 20px 0 20px;
  }
`;
const Row = styled.div`
  /* width: calc(25% - 30px); */
  width: 100%;
  line-height: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    &:nth-child(1),
    &:nth-child(2) {
      border-top: 0px;
    }
  }
`;

const Header = styled.div`
  color: black;
  font-size: 1.25rem;
  font-weight: 300;
  @media screen and (max-width: 767px) {
    font-size: 1.188rem;
  }
`;

const MegaLinks = styled.ul`
  margin-left: -40px;
  border-left: 1px solid rgba(255, 255, 255, 0.09);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    padding: 0 20px;
  }

  li a {
    padding: 0px;
    padding: 0 20px;
    color: #565759;
    font-size: 0.875rem;
    display: block;
  }

  li a:hover {
    color: #000000;
  }

  @media screen and (max-width: 767px) {
    border-left: 0px;
    padding-left: 15px;
    li {
      margin: 0;
    }
  }
`;

//btn.close-btn
const BtnCloseBtn = styled.label`
  position: absolute;
  right: 30px;
  top: 10px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const MenuBtn = styled.label`
  position: absolute;
  right: 30px;
  top: 10px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const DesktopItem = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Standalone = styled.li`
  a {
    color: #000000 !important;
  }
`;

export default function Navbar() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Wrapper>
          <Logo>
            <Link href='/'>Ljungbackens</Link>
          </Logo>
          <input type='radio' name='slider' id='menu-btn' />
          <input type='radio' name='slider' id='close-btn' />
          <NavLinks className='nav-links'>
            <BtnCloseBtn htmlFor='close-btn'>
              <IoCloseSharp />
            </BtnCloseBtn>
            <li>
              <Link href='/' className='parentLink'>
                Om Ljungbacken
              </Link>
            </li>
            <li>
              <DesktopItem>
                <Link href='#' className='parentLink'>
                  Galleri
                </Link>
              </DesktopItem>
              <input type='checkbox' id='showDrop' />
              <MobileItem htmlFor='showDrop' className='parentLink'>
                Galleri
              </MobileItem>
              <DropMenu className='drop-menu'>
                <li>
                  <Link href='#'>Information</Link>
                </li>
                <li>
                  <Link href='#'>Utställningar</Link>
                </li>
                <li>
                  <Link href='#'>För Konstnärer</Link>
                </li>
              </DropMenu>
            </li>
            <li>
              <DesktopItem href='#'>
                <Link href='#' className='parentLink'>
                  Kurser
                </Link>
              </DesktopItem>
              <input type='checkbox' id='showMega' />
              <MobileItem htmlFor='showMega' className='parentLink'>
                Kurser
              </MobileItem>
              <MegaBox className='mega-box'>
                <Content>
                  <Row>
                    <ImageWrapper>
                      <Image
                        src='/images/wallwithpainting.jpg'
                        width='100'
                        height='200'
                        alt='alt'
                      />
                    </ImageWrapper>
                  </Row>
                  <Row>
                    <Header>Kurskatalog</Header>
                    <MegaLinks>
                      <li>
                        <Link href='#'>Konst Workshop</Link>
                      </li>
                      <li>
                        <Link href='#'>Vinprovning</Link>
                      </li>
                      <li>
                        <Link href='#'>Cava & Kavla</Link>
                      </li>
                      <li>
                        <Link href='#'>Kroki</Link>
                      </li>
                      <li>
                        <Link href='#'>Oljmåleri</Link>
                      </li>
                      <li>
                        <Link href='#'>Kol Teckning</Link>
                      </li>
                      <li>
                        <Link href='#'>ART TALK & WINE</Link>
                      </li>
                    </MegaLinks>
                  </Row>
                  <Row>
                    <Header>Information</Header>
                    <MegaLinks>
                      <li>
                        <Link href='#'>Instruktörer</Link>
                      </li>
                      <li>
                        <Link href='#'>Boka</Link>
                      </li>
                    </MegaLinks>
                  </Row>
                </Content>
              </MegaBox>
            </li>
            <li>
              <DesktopItem>
                <Link href='#' className='parentLink'>
                  Hyr lokal
                </Link>
              </DesktopItem>
              <input type='checkbox' id='showDrop2' />
              <MobileItem htmlFor='showDrop2' className='parentLink'>
                Hyr Lokal
              </MobileItem>
              <DropMenu className='drop-menu last'>
                <li>
                  <Link href='#'>Vad Ingår</Link>
                </li>
                <li>
                  <Link href='#'>Utställningar</Link>
                </li>
                <li>
                  <Link href='#'>För Konstnärer</Link>
                </li>
              </DropMenu>
            </li>
          </NavLinks>
          <MenuBtn htmlFor='menu-btn' className='btn menu-btn'>
            <IoIosMenu />
          </MenuBtn>
        </Wrapper>
      </Nav>
    </>
  );
}
