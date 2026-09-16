import Hero from "../components/Hero";
import NavBar from "../components/NavBar";



export default function Home() {
  return (
    <>
       <main className="min-h-screen bg-white text-gray-900">
    
<NavBar/>
      
      

      {/* Hero Section */}
      {/* <section className="bg-pink-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-pink-600">
            New Collection
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Fashion Made for You
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-600">
            Discover stylish, comfortable and modern clothing designed
            to make every day feel special.
          </p>

          <button className="mt-8 rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Shop Now
          </button>
        </div>
      </section> */}
      <Hero/>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold">
          Shop by Category
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-pink-100 p-10 text-center">
            <h3 className="text-xl font-semibold">Dresses</h3>
            <p className="mt-2 text-sm text-gray-600">
              Elegant styles for every occasion
            </p>
          </div>

          <div className="rounded-2xl bg-purple-100 p-10 text-center">
            <h3 className="text-xl font-semibold">Tops</h3>
            <p className="mt-2 text-sm text-gray-600">
              Comfortable everyday fashion
            </p>
          </div>

          <div className="rounded-2xl bg-orange-100 p-10 text-center">
            <h3 className="text-xl font-semibold">Accessories</h3>
            <p className="mt-2 text-sm text-gray-600">
              Complete your look
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Welcome to Luna Fashion
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Find your perfect style with our carefully selected collection
            of women's fashion.
          </p>

          <button className="mt-8 rounded-full border border-black px-8 py-3 text-sm font-medium transition hover:bg-black hover:text-white">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Luna Fashion. All rights reserved.
        </div>
      </footer>
    </main>
    </>
 
  );
}

