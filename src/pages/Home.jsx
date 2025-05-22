import React from "react";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import Resourses from "./Resourses";

function Home() {
  return (
    <div>
      {/* Home*/}
      <div class="p-10 mt-15 sm:p-10 rounded-4xl bg-gray-900  bg-white text-black flex items-center justify-center overflow-hidden shadow-2xl">
        <div class="max-w-6xl px-4 sm:px-6">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* <!-- Left Section: Text Content --> */}
            <div class="flex flex-col justify-center text-center md:text-left z-10">
              <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold uppercase leading-tight tracking-tight">
                Design with <span class="text-yellow-500">Impact</span>
              </h1>
              <p class="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400  text-gray-700 text-balance">
                Brutal aesthetics for a bold web presence. Build without
                compromise.
              </p>
              <div class="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <a
                  href="#get-started"
                  class="rounded-sm p-3 grow text-center bg-yellow-500 text-black font-bold uppercase text-sm tracking-widest hover:bg-yellow-600 transition"
                >
                  Get Started
                </a>
                <a
                  href="#learn-more"
                  class="rounded-sm p-3 grow border text-center border-yellow-500 text-yellow-500 font-bold uppercase text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* <!-- Right Section: Visual Block --> */}
            <div class="relative flex items-center sm:m-10">
              <div class="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 rotate-12 rounded-lg border-yellow-700 border-b-4 border-r-8 max-sm:hidden"></div>
              <div class="relative z-10 bg-gray-800 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
                <h2 class="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
                  Bold. Strong. Raw.
                </h2>
                <p class="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
                  Embrace minimalism with maximal impact.
                </p>
              </div>
              <div class="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 -rotate-12 rounded-lg border-yellow-700 border-r-4 border-b-8 max-sm:hidden"></div>
            </div>
          </div>
        </div>
      </div>
      {/*about*/}
      <About />

      {/* services */}
      <Services />

      {/* testimonials */}
      <Testimonials />
      
      {/* Resources */}
      <Resourses/>

      {/* contact us */}
      <Contacts/>



      {/* footer */}
      <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              class="inline-flex items-center"
            >
              <svg
                class="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12"></rect>
                <rect x="3" y="17" width="7" height="6"></rect>
                <rect x="14" y="1" width="7" height="6"></rect>
                <rect x="14" y="11" width="7" height="12"></rect>
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Company
              </span>
            </a>
            <div class="mt-6 lg:max-w-sm">
              <p class="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p class="mt-4 text-sm text-gray-800">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@lorem.mail
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span class="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div class="flex items-center mt-1 space-x-3">
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p class="text-sm text-gray-600">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
