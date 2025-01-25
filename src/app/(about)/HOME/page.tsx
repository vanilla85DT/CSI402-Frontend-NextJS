const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden">
          <div className="bg-blue-500 text-white py-6 text-center">
            <h2 className="text-3xl font-bold">
              Welcome Home
            </h2>
          </div>
          <div className="space-y-6 p-6">
            <p className="text-gray-600 text-center">
              Discover a world of possibilities starting from your home page.
            </p>
            
            <div className="flex justify-center space-x-4">
              <button className="w-full border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50 transition">
                Learn More
              </button>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition flex items-center justify-center">
                Get Started 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home