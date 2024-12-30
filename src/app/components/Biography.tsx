import Image from 'next/image'

export default function Biography() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md">
      <div className="w-48 h-48 relative rounded-full overflow-hidden">
        <Image 
          src="/profile.jpg" 
          alt="Saritha Tadlapalli"
          width={192}
          height={192}
          className="rounded-full object-cover"
          priority
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Saritha Tadlapalli</h1>
        <p className="text-gray-700 max-w-2xl">
          A passionate computer science professional with a Master's degree from Indiana State University. 
          I specialize in innovative software development, with a keen interest in creating impactful technological solutions. 
          My expertise spans multiple programming languages and frameworks, with a focus on delivering high-quality, 
          efficient, and user-centric applications.
        </p>
        <div className="mt-4 flex space-x-4">
          <a 
            href="mailto:saritha.tadlapalli@example.com" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
