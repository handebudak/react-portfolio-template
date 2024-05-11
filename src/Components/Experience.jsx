export const Experience = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-white text-center uppercase">
        Experience
      </h1>
      <span className="text-center bg-gradient-to-r from-violet-500 to-amber-500 inline-block text-transparent bg-clip-text uppercase">
        Explore now
      </span>
      <div className="mt-14">
        <div className="flex justify-between">
          {/* <!-- Left --> */}
          <div className="text-lg text-white">
            <b> WebHR / </b>
            Software Engineer
          </div>

          {/* <!-- Right --> */}
          <span className="text-xs text-[#E1E1E1]">
            MAY 2022 - PRESENT, HYDERABAD
          </span>
        </div>
        <p className="mt-8 text-xs text-[#E1E1E1]">
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud
          based Social HR Software for SMEs by Verge Systems Inc. WebHR is
          currently used in over 160 countries world wide by thousands of
          organizations to manage HR, As a React.js developer with 1.5 year of
          experience, I have a strong foundation in creating dynamic and
          responsive mobile and web applications.
          <br />
          My experience with React Native has allowed me to develop
          cross-platform mobile applications that run seamlessly on both iOS and
          Android platforms. Additionally, my proficiency in React.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
        </p>
        <div className="flex flex-col sm:flex-row mt-5 gap-2">
          <div className="max-w-min sm:max-w-max bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.8px] rounded-full">
            <button className="text-sm px-4 py-2 text-[#E1E1E1] bg-black rounded-full">
              React Native
            </button>
          </div>
          <div className="max-w-min bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.8px] rounded-full">
            <button className="text-sm px-4 py-2 text-[#E1E1E1] bg-black rounded-full">
              React
            </button>
          </div>
          <div className="max-w-min bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.8px] rounded-full">
            <button className="text-sm px-4 py-2 text-[#E1E1E1] bg-black rounded-full">
              JavaScript
            </button>
          </div>
          <div className="max-w-min bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[0.8px] rounded-full">
            <button className="text-sm px-4 py-2 text-[#E1E1E1] bg-black rounded-full">
              TypeScript
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
