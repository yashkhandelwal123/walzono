// import { Home } from "lucide-react"
import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 bg-purple-200 rounded-full filter blur-2xl opacity-60"></div>
          </div>
          <div className="relative">
            <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">404</h1>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center mt-14">
              {/* <svg className="h-24 w-24 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Oops! Page not found</h2>
          <p className="text-lg text-gray-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            {/* <Home className="mr-2 h-5 w-5" /> */}
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

