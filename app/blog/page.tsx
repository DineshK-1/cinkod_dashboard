import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex flex-col gap-4 p-24 bg-background min-h-screen">
      <div className="flex w-full justify-between">
        <h1 className="text-primary text-2xl font-semibold">Blog</h1>
        <Link
          href="/blog/create"
          className="border-[2px] border-gray-800 px-8 py-2 w-fit text-gray-300"
        >
          Create Blog
        </Link>
      </div>
      <div className="flex"></div>
      <div className="grid grid-cols-2">
        <div className="bg-zinc-800 p-12 rounded-3xl text-sm flex flex-col gap-4">
          <span className="bg-gray-500 w-full h-56"></span>
          <span className="text-xl">Blog Title</span>
          <span className="text-gray-300">
            Blog content Non laboris commodo commodo mollit ea irure sit
            exercitation consectetur. Consectetur veniam est ea in ullamco
            aliquip cillum voluptate. Eiusmod enim duis occaecat magna dolor.
            Qui ex do anim aute irure enim ullamco excepteur. Laboris qui
            laboris laboris id in. Sunt culpa sunt aliquip ullamco pariatur
            laborum consequat do anim laboris.
          </span>
          <div className="flex justify-between w-full gap-2">
            <Link
              href={`/blog/edit/blog`}
              className="bg-accent font-semibold p-3 text-black hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-accent w-full text-center"
            >
              Edit Blog
            </Link>
            <button className="bg-accent font-semibold p-3 text-black hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-accent w-full">
              View Stats
            </button>
          </div>
          <button className="bg-primary font-semibold p-3 text-black hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary">
            View Page
          </button>
        </div>
      </div>
    </main>
  );
}
