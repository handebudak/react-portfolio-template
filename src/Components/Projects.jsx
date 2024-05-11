import webhr from "../assets/webhr.png";
import hireside from "../assets/hireside.png";
import verge from "../assets/verge.png";
import payoasis from "../assets/payoasis.png";

export const Projects = () => {
  return (
    <>
      <div className="flex flex-col mt-28">
        <h1 className="text-2xl font-bold text-white text-center uppercase">
          Projects
        </h1>
        <span className="text-center bg-gradient-to-r from-violet-500 to-amber-500 inline-block text-transparent bg-clip-text uppercase">
          Explore now
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14">
          <div className="flex gap-4 p-2 text-white">
            <div className="bg-white p-7 w-[120px] h-[70px] flex items-center justify-center rounded-lg">
              <img alt="webhr" src={webhr} />
            </div>
            <div className="flex gap-1 flex-col">
              <h5 className="text-base font-extrabold">WebHR</h5>
              <p className="text-[#878787] text-[6px] w-56">
                Designed a modern UI website comprising more than 50 screens,
                along with the integration of a blog using Next.js.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-2 text-white">
            <div className="bg-white p-7 w-[120px] h-[70px] flex items-center justify-center rounded-lg">
              <img alt="hireside" src={hireside} />
            </div>
            <div className="flex gap-1 flex-col">
              <h5 className="text-base font-extrabold">HireSide</h5>
              <p className="text-[#878787] text-[6px] w-56">
                Developed a web application on Next.js that allows users to
                apply for jobs, create job posts, and manage their company
                profiles.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-2 text-white">
            <div className="bg-white p-7 w-[120px] h-[70px] flex items-center justify-center rounded-lg">
              <img alt="verge" src={verge} />
            </div>
            <div className="flex gap-1 flex-col">
              <h5 className="text-base font-extrabold">Verge Systems</h5>
              <p className="text-[#878787] text-[6px] w-56">
                Developed the Verge Systems website using React.js.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-2 text-white">
            <div className="bg-white p-7 w-[120px] h-[70px] flex items-center justify-center rounded-lg">
              <img alt="payoasis" src={payoasis} />
            </div>
            <div className="flex gap-1 flex-col">
              <h5 className="text-base font-extrabold">Payoasis</h5>
              <p className="text-[#878787] text-[6px] w-56">
                Designed the modern UI for a banking website utilizing Gatsby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
