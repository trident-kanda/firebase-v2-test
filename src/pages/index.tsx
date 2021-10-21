import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/firestore">
            <a className="text-xl">FireStore</a>
          </Link>
        </li>
        <li>
          <Link href="/fireauth">
            <a className="text-xl">FireAuth</a>
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
