import type { Character } from "@/data/characters";

interface RevealCardProps {
  character: Character;
}

export default function RevealCard({ character }: RevealCardProps) {
  return (
    <div
      className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663467192176/W4UFCYMKDoGwu2E9JjnetJ/reflection-space-8eFh866wVufH6DWBoRFP8x.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      <div className="relative z-10">
        <div className="flex items-start gap-6 mb-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg flex-shrink-0"
            style={{ backgroundColor: character.bg }}
          >
            {character.av}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {character.name}
            </h3>
            <p className="text-sm text-gray-200 italic">{character.verse}</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4 mb-4">
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            Character Reflection
          </h4>
          <p
            className="text-sm text-gray-100 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: character.reflection }}
          />
        </div>

        <div className="bg-yellow-500/20 backdrop-blur border border-yellow-500/50 rounded-lg p-4">
          <h4 className="text-xs font-bold text-yellow-200 uppercase tracking-wider mb-2">
            Christocentric Discussion
          </h4>
          <p className="text-sm text-yellow-50 leading-relaxed">
            {character.disc}
          </p>
        </div>
      </div>
    </div>
  );
}
