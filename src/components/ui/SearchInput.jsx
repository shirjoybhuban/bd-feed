const SearchInput = () => {
  return (
    <div className="relative">
      <input
        className="flex h-9 w-full rounded-full border-2 border-input bg-transparent px-5 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-slate-400">
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
};

export default SearchInput;
