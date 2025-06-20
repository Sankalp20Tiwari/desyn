import Link from "next/link";

export default function  NotFound  () {


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center px-4">
      

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>


      <div className="relative z-10 text-center max-w-2xl">
        

        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-slate-800 mb-4 tracking-tight">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
            Page Not Found
          </h2>
          <p className="text-lg text-wjite leading-relaxed max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to designing.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>

          <button
            className="px-8 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Support
          </button>
        </div>


        <div className="flex items-center justify-center space-x-2 text-slate-500">
          <div className="w-12 h-12  flex items-center justify-center">
            <img src="/logo.png" alt="Desyn Logo" />
          </div>
          <span className="text-xl font-medium">Desyn</span>
        </div>

      </div>
    </div>
  );
};

