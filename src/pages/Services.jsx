import React from 'react'

function Services() {
  return (
    <div>
      <h2 class="flex flex-row flex-nowrap items-center mt-24">
        <span class="flex-grow block border-t border-black"></span>
        <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
          Services
        </span>
        <span class="flex-grow block border-t border-black"></span>
      </h2>

      
      <main class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Inspired by the amazing
          <span class="font-semibold">restorePhotos</span> app
        </a>
        <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Make your photos
          <span class="relative whitespace-nowrap text-orange-400">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span class="relative">Pop</span>
          </span>
        </h1>
        <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Want to style up your photos? Maybe get that perfect LinkedIn
          headshot? Let our AI do its magic and replace your background with
          your color of choice. 100% free – pop your photos today.
        </p>
        <a
          class="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
          href="#"
        >
          Pop your photos →
        </a>
      </main>
      {/* fourth section */}
      <section class="flex items-center justify-center mt-10 pb-10">
        <div
          class="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto"
          id="pricing"
        >
          <h3 class="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">
            Pay once, use forever
          </h3>
          <div class="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
              <div class="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-standard"
                  class="text-gray-900 text-2xl font-semibold leading-8"
                >
                  Standard
                </h3>
              </div>
              <p class="mt-4 text-base leading-6 text-gray-600">
                1 license for only 1 activation
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="line-through text-2xl font-sans text-gray-500/70">
                  $39
                </span>
                <span class="text-5xl font-bold tracking-tight text-gray-900">
                  $29
                </span>
              </p>
              <a
                href=""
                aria-describedby="tier-standard"
                class="text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                target="_blank"
              >
                Buy now
              </a>
              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                <li class="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-5 flex-none text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Lifetime access
                </li>
                <li class="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-5 flex-none text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  All AI features
                </li>
                <li class="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-5 flex-none text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Use your own OpenAI key
                </li>
              </ul>
            </div>
            <div class="ring-2 ring-blue-600 rounded-3xl p-8 xl:p-10">
              <div class="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-extended"
                  class="text-blue-600 text-2xl font-semibold leading-8"
                >
                  Extended
                </h3>
                <p class="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                  Most popular
                </p>
              </div>
              <p class="mt-4 text-base leading-6 text-gray-600">
                1 license for up to 3 activations
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="line-through text-2xl font-sans text-gray-500/70">
                  $59
                </span>
                <span class="text-5xl font-bold tracking-tight text-gray-900">
                  $39
                </span>
              </p>
              <a
                href=""
                aria-describedby="tier-extended"
                class="bg-blue-600 text-white shadow-sm hover:bg-blue-500 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                target="_blank"
              >
                Buy now
              </a>
              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                <li class="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-5 flex-none text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Lifetime access
                </li>
                <li class="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-5 flex-none text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  All AI features
                </li>
                <li class="flex gap-x-3 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-5 flex-none text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Use your own OpenAI key
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* fifth section */}
      <section class="text-gray-600 body-font bg-white ">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
              Title of Project
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed">
              Short description here, Short description here Short description
              here Short description here Short description here Short
              description here.
            </p>
            <div class="flex justify-center">
              <a
                href="#"
                class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"
              >
                Start Exploring
              </a>
              <a
                href="#"
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Read articles
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services
