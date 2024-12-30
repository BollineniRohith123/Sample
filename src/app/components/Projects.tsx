import Image from 'next/image'

const projects = [
  {
    title: 'Machine Learning Image Classifier',
    description: 'Developed a robust image classification system using deep learning techniques, achieving 95% accuracy across multiple object recognition tasks.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    githubLink: '#',
    imageUrl: '/project-screenshots/ml-classifier.png'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Created a scalable real-time chat application with end-to-end encryption and advanced user management features.',
    technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
    githubLink: '#',
    imageUrl: '/project-screenshots/chat-app.png'
  },
  {
    title: 'Cloud-based Inventory Management System',
    description: 'Designed a comprehensive inventory tracking solution with predictive analytics and automated restocking recommendations.',
    technologies: ['AWS', 'Python', 'Django', 'PostgreSQL'],
    githubLink: '#',
    imageUrl: '/project-screenshots/inventory-system.png'
  }
]

export default function Projects() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full h-48 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Project Screenshot
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
