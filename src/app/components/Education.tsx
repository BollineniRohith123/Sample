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
    <div className="space-y-6">
      {educationDetails.map((edu) => (
        <div 
          key={edu.degree} 
          className="bg-white border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-3">{edu.degree}</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700">{edu.institution}</span>
            <span className="text-gray-600">Graduated {edu.graduationYear}</span>
          </div>
          <p className="text-gray-700 mb-3">GPA: {edu.gpa}/4.0</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {edu.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
