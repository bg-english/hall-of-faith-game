export default function GrammarSummary() {
  return (
    <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-8">
        Grammar Structures We Used — Quick Review
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur border-l-4 border-emerald-400 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">Present Perfect</h3>
          <p className="text-sm text-gray-300 mb-2">
            <strong>have/has + past participle</strong>
          </p>
          <p className="text-sm text-gray-200 italic">
            "David <strong>has written</strong> many songs to God."
          </p>
          <p className="text-xs text-gray-400 mt-2">
            → Past action with present relevance
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur border-l-4 border-purple-400 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">
            Present Perfect Continuous
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            <strong>have/has been + verb-ing</strong>
          </p>
          <p className="text-sm text-gray-200 italic">
            "Ruth <strong>has been working</strong> faithfully every day."
          </p>
          <p className="text-xs text-gray-400 mt-2">
            → Ongoing action from past to now
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur border-l-4 border-amber-400 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">Past Perfect</h3>
          <p className="text-sm text-gray-300 mb-2">
            <strong>had + past participle</strong>
          </p>
          <p className="text-sm text-gray-200 italic">
            "Joseph <strong>had already forgiven</strong> his brothers."
          </p>
          <p className="text-xs text-gray-400 mt-2">
            → Action completed before another past action
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur border-l-4 border-pink-400 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">
            Past Perfect Continuous
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            <strong>had been + verb-ing</strong>
          </p>
          <p className="text-sm text-gray-200 italic">
            "Moses <strong>had been leading</strong> people for 40 years."
          </p>
          <p className="text-xs text-gray-400 mt-2">
            → Ongoing action before a past moment
          </p>
        </div>

        <div className="md:col-span-2 bg-white/5 backdrop-blur border-l-4 border-blue-400 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">
            Phrasal Verbs — Making Progress
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-200">
            <div>
              <p>
                <strong>press on</strong> — continue despite difficulty
              </p>
              <p>
                <strong>give up</strong> — stop trying
              </p>
              <p>
                <strong>move on</strong> — leave the past behind
              </p>
              <p>
                <strong>keep up</strong> — maintain pace/effort
              </p>
              <p>
                <strong>fall behind</strong> — lose progress
              </p>
            </div>
            <div>
              <p>
                <strong>move forward</strong> — make progress
              </p>
              <p>
                <strong>come along</strong> — develop/progress
              </p>
              <p>
                <strong>catch up</strong> — reach same level after being behind
              </p>
              <p>
                <strong>carry on</strong> — continue
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-lg">
        <h3 className="text-lg font-bold text-white mb-2">
          Key Theme: Personal Qualities & Achieving Goals
        </h3>
        <p className="text-gray-200">
          Throughout these stories, we see that success isn't just about
          intelligence or talent. The characters who achieved their goals shared
          common qualities: <strong>faithfulness, perseverance, courage,
          humility, and obedience</strong>. These qualities determined whether
          they pressed on or gave up when facing challenges.
        </p>
      </div>
    </div>
  );
}
