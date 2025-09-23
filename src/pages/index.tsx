import { useState, useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <div
        className={`min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 ${inter.className}`}
      >
        <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-gray-900">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
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
        <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24 pb-32">
          <div className="max-w-4xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 mb-4 tracking-tight">
              Something Big is Coming
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              Dan Realestate
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your premier destination for exceptional real estate
              opportunities. We&apos;re crafting something amazing to help you
              find your dream home.
            </p>

            {/* Countdown Timer */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-lg mx-auto">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.days}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Days
                </div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.hours}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Hours
                </div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Minutes
                </div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Seconds
                </div>
              </div>
            </div> */}

            {/* Email Signup */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl max-w-md mx-auto mb-12">
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
                  className="flex-1 px-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Premium Listings
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Exclusive access to the finest properties in prime locations.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Market Insights
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Data-driven insights to make informed real estate decisions.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    ></path>
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
        <footer className="w-full p-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="mb-4 sm:mb-0">
              © {new Date().getFullYear()} Dan Realestate. All rights reserved.
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
