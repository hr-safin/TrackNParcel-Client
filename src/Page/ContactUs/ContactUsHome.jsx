import React from "react";

const ContactUsHome = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="container px-6 py-44 mx-auto">
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              class="font-bold text-center text-3xl lg:text-4xl"
            >
              Contact us
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              class="mt-3 text-gray-600 text-center"
            >
              Our friendly team would love to hear from you.
            </p>
          </div>

          <div
            class="grid grid-cols-1 gap-12 mt-20 lg:grid-cols-3"
          >
            <div data-aos="fade-up"
            data-aos-duration="2500" class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-sm text-green-500 ">
                  info@tracknparcel.com
                </p>
              </div>

              <div data-aos="fade-up"
              data-aos-duration="3000">
                <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">
                  Office
                </h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <p class="mt-2 text-sm text-green-500 ">
                  Mirpur 1, Dhaka, Bangladesh
                </p>
              </div>

              <div data-aos="fade-up"
              data-aos-duration="3000">
                <span class="inline-block p-3 text-green-500 rounded-full bg-green-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p class="mt-2 text-sm text-green-500 ">+88 03434444242</p>
              </div>
            </div>

            <div data-aos="fade-up"
            data-aos-duration="3000" class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%mirpur1+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsHome;
