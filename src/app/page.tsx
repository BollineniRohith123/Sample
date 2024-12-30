import Biography from './components/Biography'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4 space-y-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Saritha Tadlapalli</h1>
          <p className="text-xl text-gray-600">Computer Science Professional</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">About Me</h2>
          <p className="text-gray-700">
            A passionate computer science professional with a Master's degree from Indiana State University. 
            Specializing in innovative software development and technology solutions.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Java', 'JavaScript', 'React', 'Node.js', 'Machine Learning', 'Cloud Computing'].map((skill) => (
              <div key={skill} className="bg-blue-50 p-3 rounded-lg text-blue-700">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Machine Learning Classifier',
                description: 'Image classification system using deep learning'
              },
              {
                title: 'Real-time Chat App',
                description: 'Scalable chat application with encryption'
              },
              {
                title: 'Inventory Management',
                description: 'Cloud-based inventory tracking system'
              }
            ].map((project) => (
              <div key={project.title} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
