import SectionTitle from "./SectionTitle"
import SectionInterface from "../../lib/Section/Interface/SectionInterface"

interface MyProps {
  children?: React.ReactNode
  isOpen: boolean
  title: string
}

export default function Section(props: MyProps) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-6 py-2 sm:px-10 lg:px-10">
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex items-center justify-between cursor-pointer">
            <div className="flex-row w-full">
              <div className="flex justify-between items-center">
                <SectionTitle
                  title={props.title}
                />
                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <img
                    src="./shared/down-arrow.svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  />
                  <img
                    src="./shared/up-arrow.svg"
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  />
                </span>
              </div>
              <div className="flex-grow border-t border-black"></div>
            </div>
          </summary>
          <>{props.children}</>
        </details>
      </div>
    </section>
  )
}