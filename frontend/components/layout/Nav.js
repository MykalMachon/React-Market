import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
    }
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
      <li>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </li>
      <li>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
