export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Debug Failing Browser Automation{" "}
          <span className="text-[#58a6ff]">Visually</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing why your Playwright or Selenium scripts break. AutoDebug captures DOM snapshots, network requests, and execution context — then replays failures frame by frame.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Debugging — $25/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Works with Playwright, Selenium, Cypress, and Puppeteer.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["DOM Snapshots", "Timeline Scrubbing", "Selector Inspector", "Network Capture", "Team Sharing", "CI Integration"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-xs px-3 py-1 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Fake terminal preview */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#484f58]">autodebug — session replay</span>
          </div>
          <div className="p-6 text-sm space-y-2">
            <p><span className="text-[#58a6ff]">▶</span> <span className="text-[#8b949e]">t=0ms</span> <span className="text-white">navigate("https://app.example.com/login")</span></p>
            <p><span className="text-[#58a6ff]">▶</span> <span className="text-[#8b949e]">t=312ms</span> <span className="text-white">click("#submit-btn")</span></p>
            <p><span className="text-[#ffa657]">⚠</span> <span className="text-[#8b949e]">t=1840ms</span> <span className="text-[#ffa657]">element detached from DOM</span></p>
            <p><span className="text-[#ff7b72]">✗</span> <span className="text-[#8b949e]">t=1841ms</span> <span className="text-[#ff7b72]">TimeoutError: selector ".confirm-modal" not found</span></p>
            <p className="pt-2 text-[#3fb950]">→ AutoDebug captured 47 DOM mutations before failure</p>
            <p className="text-[#3fb950]">→ Network: POST /api/checkout returned 429 (rate limited)</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited debug sessions",
              "DOM snapshot timeline",
              "Network request capture",
              "Selector failure analysis",
              "Team session sharing",
              "CI/CD webhook integration",
              "30-day session history"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">Which automation frameworks are supported?</h3>
            <p className="text-[#8b949e] text-sm">AutoDebug works with Playwright, Selenium, Cypress, and Puppeteer via a lightweight browser extension and optional SDK. No code changes required for basic capture.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">How does the visual replay work?</h3>
            <p className="text-[#8b949e] text-sm">The extension records DOM mutations, network requests, and script execution events. The dashboard reconstructs a pixel-accurate timeline you can scrub through to see exactly what changed before the failure.</p>
          </div>
          <div className="pb-6">
            <h3 className="text-white font-semibold mb-2">Is my test data kept private?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Sessions are encrypted at rest and only accessible to your team. You can also self-host the capture agent for fully on-premise deployments.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} AutoDebug. Built for QA engineers and automation developers.
      </footer>
    </main>
  )
}
