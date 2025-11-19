import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows.',
  },
  {
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent.',
  },
  {
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it.",
  },
]

export default function FAQSection() {
  return (
    <section className="bg-[var(--matte-black)] text-[var(--steel-white)] pt-32 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Title + Intro */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[var(--steel-white)]/70 text-base/7 max-w-md">
              Have questions? Here are the most common ones asked — answered clearly, honestly, and directly.
            </p>
          </div>

          {/* Right Column: The fire question image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/img/about/question.png"
              alt="Burning question mark"
              className="w-64 h-64 object-cover rounded-xl shadow-xl shadow-[var(--steel-white)]/10 
              ring-1 ring-[var(--steel-white)]/10 transform rotate-3 hover:rotate-0 transition-all duration-300"
            />
          </div>

        </div>

        {/* FAQ List */}
        <dl className="mt-16 divide-y divide-[var(--steel-white)]/10 border border-[var(--steel-white)]/10 rounded-2xl bg-white/5 backdrop-blur-sm">
          {faqs.map((faq) => (
            <Disclosure
              key={faq.question}
              as="div"
              className="px-6 py-5 hover:bg-white/10 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
            >
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left">
                  <span className="text-base/7 font-semibold text-[var(--steel-white)]">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="size-6 text-[var(--steel-white)]/60 group-data-open:hidden"
                    />
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="size-6 text-[var(--steel-white)]/60 group-not-data-open:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>

              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base/7 text-[var(--steel-white)]/70">
                  {faq.answer}
                </p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>

      </div>
    </section>
  )
}
