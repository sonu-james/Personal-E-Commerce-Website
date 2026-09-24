"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200 bg-white shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-22 max-w-[1450px] items-center justify-between sm:px-6 lg:px-8">

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 md:flex">

            <Link
              href="/"
              className={`text-base font-thin transition ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              Home
            </Link>

            <Link
              href="/shop"
              className={`text-base font-thin transition ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              Shop
            </Link>

            <Link
              href="/new-arrivals"
              className={`text-base font-thin transition ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              New Arrivals
            </Link>

            <Link
              href="/categories"
              className={`text-base font-thin transition ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              Categories
            </Link>

            <Link
              href="/offers"
              className={`text-base font-thin transition ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              Offers
            </Link>

          </nav>

          {/* Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-4xl font-semibold tracking-wider transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            LUNA
          </Link>

          {/* Right Actions */}
          <div className="ml-auto flex items-center gap-6">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className={`transition-all duration-200 hover:scale-110 ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className={`hidden transition-all duration-200 hover:scale-110 sm:block ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              <Heart size={20} strokeWidth={1.8} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className={`transition-all duration-200 hover:scale-110 ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-white/70"
              }`}
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className={`hidden  px-5 py-2 text-sm font-medium transition sm:block ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Login
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Open menu"
              className={`text-xl md:hidden ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              ☰
            </button>

          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;