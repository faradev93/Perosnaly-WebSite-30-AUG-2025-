import TypewriterComponent from "typewriter-effect";

export default function TypeWriter({ delay, deleteSpeed }) {
  if (deleteSpeed == null || typeof deleteSpeed == "string") {
    deleteSpeed = 7;
  } else {
    deleteSpeed = deleteSpeed;
  }

  return (
    <>
      <TypewriterComponent
        options={{
          strings: [
            "I worked 4 years as a SuperTech at SnappFood ",
            "I have 8 months of experience in Frontend Development ",
            "Excited to keep learning and growing ",
          ],
          autoStart: true,
          loop: true,
          delay: delay,
          deleteSpeed: deleteSpeed,
          cursor: " |",
        }}
      ></TypewriterComponent>
    </>
  );
}
