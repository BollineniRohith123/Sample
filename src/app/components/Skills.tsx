const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'React/Next.js', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'Cloud Computing', level: 70 },
  { name: 'Database Management', level: 85 }
]

export default function Skills() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Professional Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-gray-700">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
