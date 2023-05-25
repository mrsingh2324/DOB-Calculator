import { useEffect, useState } from "react";

function App() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [dobYear, setDobYear] = useState("");
  const [dobMonth, setDobMonth] = useState("");

  const handleCalculateDob = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const calculatedYear = currentYear - years;
    const calculatedMonth = currentMonth - months;
    //get random days but within 30

    if (calculatedMonth > 0) {
      setDobYear(calculatedYear);
      setDobMonth(calculatedMonth);
    } else {
      setDobYear(calculatedYear - 1);
      setDobMonth(calculatedMonth + 12);
    }
    setYears(0);
    setMonths(0);
  };
  useEffect(
    () => {
      const calculatedDays = Math.random() * 30;
    },
    [years],
    [months]
  );

  return (
    <div className="App text-white flex flex-col gap-2 bg-gray-700 h-screen">
      <header className="items-center justify-around p-5 font-bold text-2xl flex bg-gray-900">
        <h1>DOB Calculator</h1>
        <div className="border min-w-[100px] h-[30px] items-center right-10 top-2 flex justify-center">
        <h1 className="text-lg fixed">By Satyam</h1>
      </div>
      </header>
      <div className="flex justify-between h-[400px] flex-col items-center justify-around">
        <h1 className="font-bold text-gray-500 text-2xl flex flex-col items-center">
          Enter the age in:
        </h1>
        <div className="flex gap-10 justify-around">
          <div className="flex flex-col gap-5 md:w-[360px] w-[150px] items-center">
            <span className="text-gray-200 text-xl font-semibold">Years</span>
            <input
              type="number"
              className="min-h-[40px] w-[90%] border border-black border-2 rounded text-black p-2 outline-gray-600"
              value={years}
              // placeholder="0"
              onChange={(e) => setYears(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-5 w-[150px] md:w-[360px] items-center">
            <span className="text-gray-200 text-xl font-semibold">Months</span>
            <input
              type="number"
              className="min-h-[40px] w-[90%] border border-black border-2 rounded text-black p-2 outline-gray-600"
              value={months}
              // placeholder="0"
              onChange={(e) => setMonths(e.target.value)}
            />
          </div>
        </div>
        <button
          className="border-white border p-3 bg-green-600 rounded px-8 text-xl uppercase hover:bg-green-300 hover:text-black"
          onClick={handleCalculateDob}
        >
          Submit
        </button>
        <div className="flex flex-wrap items-center gap-10 justify-around">
          <h1>Date of Birth:</h1>
          <div className="rounded bg-gray-900 p-3 px-5">
            <h1>
              {dobMonth} / {dobMonth} / {dobYear}
            </h1>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
