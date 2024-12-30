export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Saritha Tadlapalli
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}
