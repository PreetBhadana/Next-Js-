
import Link from 'next/link';
import {useRouter} from 'next/router'

function ErrorPage(props) {
  const router = useRouter();
  return (
    <div>
      <h1>It is error Page</h1>
      <Link href='/' passHref>Home page</Link>
    </div>
  );
}

export default ErrorPage;