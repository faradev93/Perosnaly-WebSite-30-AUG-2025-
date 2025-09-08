export default function AboutModal({ setmodal }) {
  return (
    <div className="">
      <div className="absolute top-0 bottom-0 right-0 left-0 size-full bg-black/50 backdrop-blur-xs flex-center">
        <div className="bg-black/50 text-white h-2/3 w-2/3 flex-center rounded-4xl flex-col">
          <p className="p-5 font-comfortaa text-center">
            Hi! Im here to help you!!
          </p>
          <button
            onClick={() => {
              setmodal(false);
            }}
            className="border-2 border-netural p-4 rounded-2xl hover:bg-accent transition-all duration-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
