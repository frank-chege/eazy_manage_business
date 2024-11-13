import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-black text-gray-100 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="w-full text-center text-3xl font-bold tracking-wide">
        <h1 className="text-gray-200">Welcome to Eazy Manage</h1>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center gap-12 text-center sm:text-left row-start-2">
        {/* Tagline or Slogan */}
        <section className="text-2xl text-gray-300 font-semibold">
          <p>Effortlessly Manage Your Team's Progress, Anywhere, Anytime.</p>
        </section>

        {/* About or Overview Section */}
        <section className="max-w-3xl text-gray-400">
          <p>
            Eazy Manage is designed to simplify employee tracking, timesheets,
            and reporting, providing an intuitive and efficient solution for
            SMEs that need customized tools without the hassle of generic,
            one-size-fits-all platforms.
          </p>
        </section>

        {/* Key Features */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {[
            {
              title: "Tailored Solutions",
              description:
                "Customized to fit the unique needs of your organization.",
            },
            {
              title: "Real-Time Tracking",
              description:
                "Keep track of team progress and deadlines seamlessly.",
            },
            {
              title: "AI-Driven Insights",
              description:
                "Leverage data to improve productivity with smart reports.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg text-gray-300"
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center text-sm text-gray-500">
        © 2024 Eazy Manage. All rights reserved.
      </footer>
    </div>
  );
}
