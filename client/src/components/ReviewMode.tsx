import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { characters } from "@/data/characters";
import GrammarSummary from "./GrammarSummary";

interface ReviewModeProps {
  onClose: () => void;
}

export default function ReviewMode({ onClose }: ReviewModeProps) {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"characters" | "grammar">(
    "characters"
  );

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentChar = characters[selectedCharacter];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663467192176/W4UFCYMKDoGwu2E9JjnetJ/reflection-space-8eFh866wVufH6DWBoRFP8x.webp')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900/80 to-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-20">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                📚 Study Review
              </h1>
              <Button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-2 px-4 rounded-lg transition-all"
              >
                ← Back to Game
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("characters")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "characters"
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                📖 Bible Characters
              </button>
              <button
                onClick={() => setActiveTab("grammar")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "grammar"
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                ✍️ Grammar Reference
              </button>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {activeTab === "characters" ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar - Character List */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sticky top-24">
                  <h2 className="text-lg font-bold text-white mb-4">
                    Characters
                  </h2>

                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4 bg-white/10 border-white/30 text-white placeholder-gray-400 rounded-lg"
                  />

                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {filteredCharacters.map((char, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelectedCharacter(characters.indexOf(char))
                        }
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                          selectedCharacter === characters.indexOf(char)
                            ? "bg-purple-500 text-white"
                            : "bg-white/5 text-gray-200 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{char.av}</span>
                          <span className="text-sm font-semibold">
                            {char.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content - Character Details */}
              <div className="lg:col-span-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                  {/* Character Header */}
                  <div className="flex items-start gap-6 mb-8 pb-8 border-b border-white/20">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-lg flex-shrink-0"
                      style={{ backgroundColor: currentChar.bg }}
                    >
                      {currentChar.av}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold text-white mb-2">
                        {currentChar.name}
                      </h2>
                      <p className="text-lg text-gray-300 italic mb-4">
                        {currentChar.verse}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentChar.qualities.map((quality, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-500/30 border border-purple-400 text-purple-200 rounded-full text-sm font-semibold"
                          >
                            {quality}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clues Section */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Story Clues
                    </h3>
                    <div className="space-y-3">
                      {currentChar.clues.map((clue, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 backdrop-blur border-l-4 rounded-lg p-4"
                          style={{ borderLeftColor: clue.b }}
                        >
                          <p className="text-xs font-bold text-gray-300 mb-2">
                            Clue {idx + 1} — {4 - idx} pts
                          </p>
                          <p
                            className="text-sm text-gray-100 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: clue.t }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Character Reflection */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Character Reflection
                    </h3>
                    <div className="bg-white/5 backdrop-blur border border-white/20 rounded-lg p-6">
                      <p
                        className="text-gray-100 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: currentChar.reflection }}
                      />
                    </div>
                  </div>

                  {/* Christocentric Discussion */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Christocentric Discussion
                    </h3>
                    <div className="bg-yellow-500/20 backdrop-blur border border-yellow-500/50 rounded-lg p-6">
                      <p className="text-yellow-50 leading-relaxed">
                        {currentChar.disc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <GrammarSummary />

              {/* Additional Grammar Examples */}
              <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-8">
                  📝 Grammar Examples from Stories
                </h2>

                <div className="space-y-6">
                  {/* Present Perfect Examples */}
                  <div className="bg-white/5 backdrop-blur border-l-4 border-emerald-400 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Present Perfect
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      <strong>Structure:</strong> have/has + past participle
                    </p>
                    <div className="space-y-2 text-sm text-gray-200">
                      <p>
                        ✓ David <strong>has written</strong> many psalms that
                        express his faith.
                      </p>
                      <p>
                        ✓ Ruth <strong>has shown</strong> remarkable loyalty and
                        dedication.
                      </p>
                      <p>
                        ✓ Joseph <strong>has forgiven</strong> his brothers
                        completely.
                      </p>
                    </div>
                  </div>

                  {/* Present Perfect Continuous Examples */}
                  <div className="bg-white/5 backdrop-blur border-l-4 border-purple-400 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Present Perfect Continuous
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      <strong>Structure:</strong> have/has been + verb-ing
                    </p>
                    <div className="space-y-2 text-sm text-gray-200">
                      <p>
                        ✓ Ruth <strong>has been working</strong> hard in the
                        fields every day.
                      </p>
                      <p>
                        ✓ Job <strong>has been enduring</strong> suffering with
                        faith.
                      </p>
                      <p>
                        ✓ The disciples <strong>have been following</strong>{" "}
                        Jesus faithfully.
                      </p>
                    </div>
                  </div>

                  {/* Past Perfect Examples */}
                  <div className="bg-white/5 backdrop-blur border-l-4 border-amber-400 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Past Perfect
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      <strong>Structure:</strong> had + past participle
                    </p>
                    <div className="space-y-2 text-sm text-gray-200">
                      <p>
                        ✓ Before Joseph became ruler, he <strong>had been</strong>{" "}
                        a slave.
                      </p>
                      <p>
                        ✓ After Moses <strong>had led</strong> the people for 40
                        years, they entered the promised land.
                      </p>
                      <p>
                        ✓ By the time David <strong>had defeated</strong> Goliath,
                        he became famous.
                      </p>
                    </div>
                  </div>

                  {/* Past Perfect Continuous Examples */}
                  <div className="bg-white/5 backdrop-blur border-l-4 border-pink-400 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Past Perfect Continuous
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      <strong>Structure:</strong> had been + verb-ing
                    </p>
                    <div className="space-y-2 text-sm text-gray-200">
                      <p>
                        ✓ Moses <strong>had been leading</strong> the people for
                        40 years when they finally reached Canaan.
                      </p>
                      <p>
                        ✓ Job <strong>had been suffering</strong> for a long time
                        before his restoration.
                      </p>
                      <p>
                        ✓ The disciples <strong>had been waiting</strong> for the
                        Holy Spirit before Pentecost.
                      </p>
                    </div>
                  </div>

                  {/* Phrasal Verbs Examples */}
                  <div className="bg-white/5 backdrop-blur border-l-4 border-blue-400 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Phrasal Verbs — Making Progress
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
                      <div>
                        <p>
                          <strong>press on:</strong> David pressed on despite
                          Saul's persecution.
                        </p>
                        <p>
                          <strong>give up:</strong> Ruth never gave up even when
                          life was hard.
                        </p>
                        <p>
                          <strong>move on:</strong> Joseph moved on from his
                          painful past.
                        </p>
                        <p>
                          <strong>keep up:</strong> The disciples kept up their
                          faith.
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>fall behind:</strong> Those who doubted fell
                          behind in faith.
                        </p>
                        <p>
                          <strong>move forward:</strong> Abraham moved forward
                          trusting God.
                        </p>
                        <p>
                          <strong>come along:</strong> Their faith came along as
                          they grew.
                        </p>
                        <p>
                          <strong>carry on:</strong> They carried on despite
                          challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="relative z-10 text-center py-6 text-gray-400 text-sm mt-12">
          <p>God's Hall of Faith · English Grammar & Personal Growth</p>
        </footer>
      </div>
    </div>
  );
}
