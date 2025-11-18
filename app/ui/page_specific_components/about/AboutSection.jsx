import { CameraIcon } from '@heroicons/react/20/solid'

export default function AboutSection() {
  return (
    <div className="overflow-hidden bg-[var(--matte-black)] pt-25">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Soft side panel highlight */}
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-white/5 lg:block" />

        <div className="mx-auto max-w-prose text-base text-[var(--steel-white)] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-gray-300 uppercase">
              About
            </h2>
            <h3 className="mt-2 text-3xl/8 font-bold tracking-tight text-[var(--steel-white)] sm:text-4xl">
              Meet Reese
            </h3>
          </div>
        </div>

        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Image side */}
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              fill="none"
              width={404}
              height={384}
              viewBox="0 0 404 384"
              aria-hidden="true"
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden text-gray-700 lg:block"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>

            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <img
                  alt="Reese filming content in an urban setting"
                  src="/img/about/avatar.png"
                  width={1184}
                  height={1376}
                  className="aspect-12/7 w-full rounded-lg object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 lg:aspect-auto"
                />
                <figcaption className="mt-3 flex text-sm text-gray-400">
                  <CameraIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-500"
                  />
                  <span className="ml-2">
                    "Placeholder Picture" Insert caption and/or photo credit here
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Text side */}
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base/7 text-gray-300">
              <p className="text-lg/7 text-[var(--steel-white)]">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
              <p className="mt-5">
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                Eros eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p className="mt-5">
                Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh
                leo. Dictum et et et sit. Faucibus sed non gravida lectus
                dignissim imperdiet a.
              </p>
              <p className="mt-5">
                Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                lorem arcu, metus, egestas netus cursus. In.
              </p>
              <ul
                role="list"
                className="mt-5 list-disc space-y-2 pl-6 marker:text-gray-500"
              >
                <li className="pl-2">
                  Quis elit egestas venenatis mattis dignissim.
                </li>
                <li className="pl-2">
                  Cras cras lobortis vitae vivamus ultricies facilisis
                  tempus.
                </li>
                <li className="pl-2">
                  Orci in sit morbi dignissim metus diam arcu pretium.
                </li>
              </ul>
              <p className="mt-5">
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur
                nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                Morbi enim fermentum lacus in. Viverra.
              </p>
              <h3 className="mt-8 text-xl/8 font-semibold text-[var(--steel-white)]">
                "Fun Facts / Catchy Title / Extra Section"
              </h3>
              <p className="mt-3">
                Tincidunt integer commodo, cursus etiam aliquam neque, et.
                Consectetur pretium in volutpat, diam. Montes, magna cursus
                nulla feugiat dignissim id lobortis amet. Laoreet sem est
                phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p className="mt-5">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}