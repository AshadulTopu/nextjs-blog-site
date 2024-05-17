import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-10">
          You search the thing that doesn&apos;t exist.
        </h1>
        <Link
          href="/"
          className="text-white bg-black px-4 py-2 rounded-full duration-300 border border-white hover:scale-105 hover:bg-white hover:text-black"
        >
          {" "}
          Back to Home{" "}
        </Link>
      </div>
    </div>
  );
}
