import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  display: inline-block;
  background: var(--black);
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.3rem 0.3rem;
  }
`;

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .bar {
    border-bottom: 2px solid var(--black);
  }
  .sub-bar {
  }
`;

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>React Market</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>search</p>
    </div>
  </HeaderStyles>
);

export default Header;
