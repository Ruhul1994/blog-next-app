import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to My Page</h1>
      <p className="mt-4 text-lg">
        This is a simple Next.js application with Tailwind CSS.
      </p>
      <Image
        src="/images/sample.jpg"
        alt="Sample Image"
        width={500}
        height={300}
        className="mt-6 rounded-lg shadow-lg"
      />
      <p className="mt-4 text-sm text-gray-600">
        This image is served from the public directory.
      </p>
    </div>
  );
}
