export const Header = () => {
  return (
    <div className="bg-black">
      <header className="flex  justify-between px-4 sm:px-0 sm:w-[480px] md:w-[720px] xl:w-[1168px] mx-auto text-white">
        <div className="flex items-center gap-4">
          <svg
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.51746H23.7302" stroke="white" strokeWidth="2.71203" />
            <path d="M0 27.6558H23.7302" stroke="white" strokeWidth="2.71203" />
            <path
              d="M14.5349 1.51746L4.74615 14.2827L14.5349 27.9597"
              stroke="white"
              strokeWidth="2.71203"
            />
          </svg>
          <div className="flex flex-col text-xl font-bold">
            John
            <span className="text-xs font-light text-end"> Doe </span>
          </div>
        </div>

        <div>
          <button className="text-sm px-4 py-2 border rounded-lg text-[#E1E1E1] border-[#9A9A9A]">
            About me
          </button>
          <button className="text-sm px-4 py-2 border rounded-lg bg-white text-black">
            Contact
          </button>
        </div>
      </header>
    </div>
  );
};
