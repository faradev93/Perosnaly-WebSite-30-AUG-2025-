import { useMemo, useState } from "react";
import TestJson2 from "../../api/test.json";
import TestJson3 from "../../api/test2.json";
import TestJson4 from "../../api/test4.json";
import { testiat } from "../../api/test";

export default function TestJson() {
  const [shomarande, setShomarande] = useState(0);
  const sum = useMemo(() => {
    let total = 0;
    for (let i = 0; i < shomarande; i++) {
      total += i;
    }
    console.log(total);
    return total;
  }, [shomarande]);
  const Increment = () => {
    setShomarande(shomarande + 1);
  };
  //
  testiat();
  console.log(TestJson3);

  return (
    <div className="overflow-x-hidden">
      <div>
        <button
          className="border-2 p-4 hover:bg-gray-600/50 m-4 transition-colors duration-1000"
          onClick={Increment}
        >
          Click
        </button>
        <p>{shomarande}</p>
        <p>Sum is:{sum}</p>
      </div>

      <table className="table-auto border-collapse border-4 border-gray-400 text-center">
        <thead className="border-1">
          <tr className="bg-gray-300">
            <td className="border border-gray-300 px-4 py-2 text-center">ID</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Name
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              LName
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              age
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              Date Birthday
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              sexmale
            </td>
          </tr>
        </thead>

        <tbody className="border-2">
          {TestJson4.map((item, k) => {
            const displayName = item.Name === "fara" ? "Faramarz" : item.Name;
            return (
              <tr key={item.id} className="gap-15 border-1">
                <td className="py-2 px-2">{item.id}</td>
                <td className="py-2 px-2 border-l-2">{item.name}</td>
                <td className="py-2 px-2 border-l-2">{item.lastName}</td>
                <td className="py-2 px-2 border-l-2">{item.age}</td>
                <td className="py-2 px-2 border-l-2">{item.date}</td>
                <td className="py-2 px-2 border-l-2">
                  {item.sexmale == 1 ? "Male" : "Female"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
