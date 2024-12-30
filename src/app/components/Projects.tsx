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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div 
          key={project.title} 
          className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
            Project Image Placeholder
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
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
  )
}
