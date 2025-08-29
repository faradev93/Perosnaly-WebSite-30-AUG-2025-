export default function DisplayCC({ children }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center ">
      {children}
    </div>
  );
}
