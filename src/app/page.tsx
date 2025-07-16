import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold underline">Welcome to My Page</h1>
      <p className="mt-4 text-lg">
        This is a simple Next.js application with Tailwind CSS.
      </p>
      <Image
        src="/globe.jpg"
        alt="Sample Image"
        width={500}
        height={300}
        className="mt-6 rounded-lg shadow-lg bg-black"
      />
      <p className="mt-4 text-sm text-gray-600">
        This image is served from the public directory.
      </p>
    </div>
  );
}
