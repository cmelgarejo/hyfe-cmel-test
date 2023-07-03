export default function Header() {
  return (
    <nav className="text-gray-200 bg-[#243966] w-full">
      <div className="bg-blue-500 bg-opacity-20 h-24 grid grid-flow-col grid-cols-3 justify-between items-center">
        <button
          className="border-0 bg-transparent px-4 leading-none transition-shadow duration-150 ease-in-out
        hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white"
          type="button"
          disabled={true}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.64646 5.93934L7.00002 6.29289L7.35357 5.93934L12.3033 0.989592C12.4984 0.794531 12.8154 0.794531 13.0104 0.989592C13.2055 1.18465 13.2055 1.50164 13.0104 1.6967L8.06068 6.64645L7.70712 7L8.06068 7.35355L13.0104 12.3033C13.2055 12.4984 13.2055 12.8153 13.0104 13.0104C12.8154 13.2055 12.4984 13.2055 12.3033 13.0104L7.35357 8.06066L7.00002 7.70711L6.64646 8.06066L1.69672 13.0104C1.50166 13.2055 1.18467 13.2055 0.989609 13.0104C0.794548 12.8153 0.794548 12.4984 0.989609 12.3033L5.93936 7.35355L6.29291 7L5.93936 6.64645L0.989609 1.6967C0.794548 1.50164 0.794548 1.18465 0.989609 0.989592C1.18467 0.794531 1.50166 0.794532 1.69672 0.989592L6.64646 5.93934Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </button>
        <h1 className="gray-20 text-xl font-bold leading-6 text-center">Insights</h1>
      </div>
    </nav>
  );
}
