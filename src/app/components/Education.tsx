const educationDetails = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Indiana State University',
    graduationYear: 2023,
    gpa: 3.8,
    highlights: [
      'Advanced Machine Learning Coursework',
      'Research in Artificial Intelligence',
      'Outstanding Academic Performance'
    ]
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    graduationYear: 2021,
    gpa: 3.6,
    highlights: [
      'Data Structures and Algorithms Specialization',
      'Software Engineering Projects',
      'Academic Excellence Award'
    ]
  }
]

export default function Education() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Education</h2>
      <div className="space-y-6">
        {educationDetails.map((edu) => (
          <div 
            key={edu.degree} 
            className="border-l-4 border-blue-500 pl-4 py-4"
          >
            <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
            <p className="text-gray-600 mb-2">
              {edu.institution} | Graduated {edu.graduationYear}
            </p>
            <p className="text-gray-700 mb-3">GPA: {edu.gpa}/4.0</p>
            <ul className="list-disc list-inside text-gray-600">
              {edu.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
