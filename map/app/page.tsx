import Image from 'next/image';
import Posts from './posts';

export default function Home() {
  return (
    <div>
      <h1>Blog</h1>
      <Posts />
    </div>
  )
}
