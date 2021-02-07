import Link from 'next/link';

const Nav = () => (
  <nav>
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
  </nav>
);

export default Nav;
