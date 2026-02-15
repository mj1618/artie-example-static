// @ts-check

/** @type {typeof import("react")} */
// @ts-ignore - provided globally by UMD script
const ReactRef = React;

/** @type {typeof import("react-dom/client")} */
// @ts-ignore - provided globally by UMD script
const ReactDOMRef = ReactDOM;

const e = ReactRef.createElement;

// ============ Components ============

function Navbar() {
  return e(
    "nav",
    { className: "flex justify-between items-center px-8 py-4 bg-white shadow" },
    e("div", { className: "text-2xl font-bold text-violet-500" }, "Acme"),
    e(
      "ul",
      { className: "flex gap-8 list-none" },
      e("li", null, e("a", { className: "no-underline text-gray-700 font-medium hover:text-violet-500 transition-colors", href: "#features" }, "Features")),
      e("li", null, e("a", { className: "no-underline text-gray-700 font-medium hover:text-violet-500 transition-colors", href: "#pricing" }, "Pricing")),
      e("li", null, e("a", { className: "no-underline text-gray-700 font-medium hover:text-violet-500 transition-colors", href: "#about" }, "About")),
      e("li", null, e("a", { className: "no-underline text-gray-700 font-medium hover:text-violet-500 transition-colors", href: "#contact" }, "Contact"))
    )
  );
}

function Hero() {
  return e(
    "section",
    { className: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-24 px-8 text-center" },
    e("h1", { className: "text-5xl font-bold mb-4" }, "Build Something Amazing"),
    e(
      "p",
      { className: "text-xl opacity-90 max-w-2xl mx-auto mb-8" },
      "A modern platform to help you create, launch, and scale your next big idea. Simple, powerful, and designed for teams of all sizes."
    ),
    e("button", { className: "bg-white text-violet-500 border-none py-4 px-10 text-lg font-semibold rounded-full cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200" }, "Get Started Free")
  );
}

/**
 * @param {{ icon: string, title: string, description: string }} props
 */
function FeatureCard({ icon, title, description }) {
  return e(
    "div",
    { className: "bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow" },
    e("div", { className: "text-5xl mb-4" }, icon),
    e("h3", { className: "text-xl font-semibold mb-2" }, title),
    e("p", { className: "text-gray-600 text-sm" }, description)
  );
}

function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Optimized for speed and performance. Your users will love the instant load times.",
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description: "Enterprise-grade security built in from day one. Your data is always protected.",
    },
    {
      icon: "📊",
      title: "Powerful Analytics",
      description: "Gain insights with comprehensive analytics and reporting tools.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Modern, responsive interfaces that look great on any device.",
    },
    {
      icon: "🔌",
      title: "Easy Integrations",
      description: "Connect with your favorite tools and services in just a few clicks.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our team is here to help you succeed, whenever you need us.",
    },
  ];

  return e(
    "section",
    { className: "py-20 px-8 bg-gray-100", id: "features" },
    e("h2", { className: "text-center text-3xl font-bold mb-12 text-slate-900" }, "Why Choose Us"),
    e(
      "div",
      { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" },
      features.map((f, i) => e(FeatureCard, { key: i, ...f }))
    )
  );
}

function CallToAction() {
  return e(
    "section",
    { className: "bg-slate-900 text-white py-20 px-8 text-center" },
    e("h2", { className: "text-3xl font-bold mb-4" }, "Ready to Get Started?"),
    e("p", { className: "opacity-80 mb-8" }, "Join thousands of teams already using our platform."),
    e("button", { className: "bg-transparent text-white border-2 border-white py-4 px-10 text-lg font-semibold rounded-full cursor-pointer hover:bg-white hover:text-slate-900 transition-colors" }, "Start Your Free Trial")
  );
}

function Footer() {
  return e(
    "footer",
    { className: "bg-slate-950 text-gray-400 p-8 text-center text-sm" },
    e("p", null, `© ${new Date().getFullYear()} Acme Inc. All rights reserved.`)
  );
}

function App() {
  return e(
    "div",
    { className: "font-sans text-slate-900 leading-relaxed" },
    e(Navbar, null),
    e(Hero, null),
    e(Features, null),
    e(CallToAction, null),
    e(Footer, null)
  );
}

// ============ Mount ============

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Missing #root");

ReactDOMRef.createRoot(rootEl).render(e(App, null));