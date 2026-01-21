import { Code2, Layers, MonitorSmartphone, Trophy } from "lucide-react";

const skills = [
  "React", "TypeScript", "Next.js", "Tailwind", "Figma", 
  "Unity", "C#", "Swift", "iOS Dev", "SvelteKit", "Docker", "UX/UI"
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hard Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                  <Trophy size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">2+</h3>
                <p className="text-sm text-gray-500 font-medium">Jahre Erfahrung</p>
            </div>
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3">
                  <Code2 size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">10+</h3>
                <p className="text-sm text-gray-500 font-medium">Projekte</p>
            </div>
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3">
                  <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">3</h3>
                <p className="text-sm text-gray-500 font-medium">Plattformen</p>
            </div>
             <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3">
                  <Layers size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">UI/UX</h3>
                <p className="text-sm text-gray-500 font-medium">Design</p>
            </div>
        </div>

        {/* Slider - Ohne Hover Stop */}
        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex w-max animate-scroll">
            {/* Liste 1 */}
            <div className="flex gap-16 px-8 items-center">
              {skills.map((skill, index) => (
                <span key={`a-${index}`} className="text-2xl font-bold text-gray-300 uppercase tracking-widest cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            {/* Liste 2 */}
            <div className="flex gap-16 px-8 items-center">
              {skills.map((skill, index) => (
                <span key={`b-${index}`} className="text-2xl font-bold text-gray-300 uppercase tracking-widest cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}