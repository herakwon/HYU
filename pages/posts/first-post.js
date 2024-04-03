import Link from 'next/link';
import Image from 'next/image'


export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
 <Image
        src="/photoofme.jpeg"
        width={350}
        height={500}
        alt="Picture of the author"
></Image>
  <h3>
  	  Hello I'm Hyeyun!
	</h3>

	<p>
	  I'm now majoring in Information System.
	</p>
	<p>
	  Nice to meet you!
      </p>
    </>
  );
}