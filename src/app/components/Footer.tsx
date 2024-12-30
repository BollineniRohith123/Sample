export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://linkedin.com/in/saritha-tadlapalli" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/saritha-tadlapalli" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a 
            href="mailto:saritha.tadlapalli@example.com" 
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Saritha Tadlapalli. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
