import Link from 'next/link'
import React from 'react'
import { Search, Heart, ShoppingBag } from "lucide-react";

function NavBar() {
  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="relative mx-auto flex h-22 max-w-[1450px] items-center justify-between sm:px-6 lg:px-8">

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="/"
              className="text-base font-thin text-gray-700 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-base font-thin text-gray-700 transition hover:text-black"
            >
              Shop
            </Link>

            <Link
              href="/new-arrivals"
              className="text-base font-thin text-gray-600 transition hover:text-black"
            >
              New Arrivals
            </Link>

            <Link
              href="/categories"
              className="text-base font-thin  text-gray-700 transition hover:text-black"
            >
              Categories
            </Link>

            <Link
              href="/offers"
              className="text-base font-thin text-gray-700 transition hover:text-black"
            >
              Offers
            </Link>
          </nav>

          {/* Logo - Perfect Center */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-4xl font-semi-bold tracking-wider font-serif"
          >
            LUNA
          </Link>

          {/* Right Actions */}
          <div className="ml-auto flex items-center gap-6">

            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              className="text-gray-700 transition-all duration-200 hover:scale-110 hover:text-black"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden text-gray-700 transition-all duration-200 hover:scale-110 hover:text-black sm:block"
            >
              <Heart size={20} strokeWidth={1.8} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="text-gray-700 transition-all duration-200 hover:scale-110 hover:text-black"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
            </Link>
            {/* Login */}
            <Link
              href="/login"
              className="hidden rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 sm:block"
            >
              Login
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Open menu"
              className="text-xl md:hidden"
            >
              ☰
            </button>

          </div>
        </div>
      </header>
    </>

  )
}

export default NavBar