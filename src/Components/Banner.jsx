import me from "../assets/me.png";

export const Banner = () => {
  return (
    <>
      {/* <!-- Banner --> */}
      <div className="my-[120px] flex flex-col items-center">
        <img className="w-[232px] mx-auto mb-9" alt="me" src={me} />
        <h1 className="text-6xl font-bold text-white text-center">John Doe!</h1>
        <div className="text-center text-[#C9C9C9] text-2xl font-semibold">
          I do Code &
          <span className="bg-gradient-to-r from-violet-500 to-amber-500 inline-block text-transparent bg-clip-text">
            Chill
          </span>
          🍿
        </div>
        <p className="text-[#E1E1E1] text-base text-center mt-5 mb-8">
          Passionate Software Engineer with a focus on React Native development,
          dedicated to crafting elegant and user-friendly mobile applications.
        </p>

        <button className="text-sm px-4 py-2 border rounded-full w-[180px] h-[60px] text-[#E1E1E1] border-[#9A9A9A]">
          About me
        </button>
      </div>
    </>
  );
};
