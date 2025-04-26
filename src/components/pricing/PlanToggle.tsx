interface PlanToggleProps {
  active: boolean
  onChange: (_active: boolean) => void
}

export default function PlanToggle({ active, onChange }: PlanToggleProps) {
  return (
    <div className="justify-center items-center grid grid-cols-3 w-64">
      <span
        className={`text-lg font-bold ${!active ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}
      >
        Monthly
      </span>

      <div className="relative mt-1.5 ml-4">
        <input
          type="checkbox"
          id="pricing-toggle"
          checked={active}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <label
          htmlFor="pricing-toggle"
          className="block bg-[#dfdfdf] rounded-full w-16 h-8 transition-colors duration-300 cursor-pointer"
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 rounded-full transform transition-transform duration-300 ${
              active ? 'translate-x-9' : ''
            }`}
            style={{ backgroundColor: active ? 'white' : 'black' }}
          ></span>
        </label>
      </div>

      <span
        className={`text-lg font-bold text-right ${active ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}
      >
        Yearly
      </span>
    </div>
  )
}
