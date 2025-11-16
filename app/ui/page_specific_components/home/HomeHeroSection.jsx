import Nav from "../../common/Nav";

export default function HomeHeroSection() {
    return (
        <header className="bg-[var(--matte-black)] text-[var(--steel-white)]">
            <div className="relative isolate overflow-hidden min-h-screen">
                <Nav />

                {/* Background image – subtle texture over matte black */}
                <img
                    alt=""
                    src="/img/home/microphone.png"
                    className="absolute inset-0 -z-10 size-full object-cover opacity-10"
                />

                {/* Top radial steel/charcoal glow */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            background:
                                "radial-gradient(circle at 10% 20%, rgba(245,247,250,0.25), rgba(31,41,55,0.7), rgba(18,18,18,0.9))",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 opacity-60 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        {/* Pill / announcement */}
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full border border-[rgba(245,247,250,0.25)] bg-[rgba(18,18,18,0.7)] px-3 py-1 text-sm/6 text-[rgba(245,247,250,0.8)] backdrop-blur-sm">
                                New episodes dropping soon.{" "}
                                <a
                                    href="#"
                                    className="font-semibold text-[var(--steel-white)] underline decoration-[rgba(245,247,250,0.4)] underline-offset-4"
                                >
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Hero copy */}
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-[var(--steel-white)] sm:text-7xl">
                                Conversations that cut through the noise.
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-[rgba(245,247,250,0.75)] sm:text-xl/8">
                                Intimate, honest, and unfiltered stories from people finding their voice in a loud world.
                                Pull up a chair and stay a while.
                            </p>

                            {/* CTAs */}
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-[var(--steel-white)] px-3.5 py-2.5 text-sm font-semibold text-[var(--matte-black)] shadow-xs hover:bg-[rgba(245,247,250,0.9)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--steel-white)]"
                                >
                                    Listen to the latest episode
                                </a>
                                <a
                                    href="#"
                                    className="text-sm/6 font-semibold text-[var(--steel-white)] hover:text-[rgba(245,247,250,0.7)]"
                                >
                                    View all episodes <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom radial steel/charcoal glow */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            background:
                                "radial-gradient(circle at 80% 80%, rgba(245,247,250,0.3), rgba(31,41,55,0.8), rgba(18,18,18,1))",
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 opacity-70 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </div>
            </div>
        </header>
    );
}
