import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Dan Realestate - Coming Soon</title>
        <meta
          name="description"
          content="Premier destination for exceptional real estate opportunities. Coming soon with premium listings, market insights, and expert guidance."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Navigation */}
        <nav className="absolute top-0 w-full z-10 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Dan Realestate
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Coming Soon
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M12 7L6.5 10v4c0 2.67 1.83 4.69 4.5 5.29 2.67-.6 4.5-2.62 4.5-5.29v-4L12 7z" />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Coming Soon
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Dan Realestate
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your premier destination for exceptional real estate
              opportunities. We&apos;re crafting something amazing to help you
              find your dream home.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Days
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Hours
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Minutes
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Seconds
                </div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl max-w-md mx-auto mb-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Be the first to know
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get notified when we launch and receive exclusive early access
                to premium listings.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Premium Listings
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Exclusive access to the finest properties in prime locations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Market Insights
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Data-driven insights to make informed real estate decisions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Expert Guidance
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Professional support from experienced real estate experts.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full p-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="mb-4 sm:mb-0">
              © 2025 Dan Realestate. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:info@danrealestate.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
