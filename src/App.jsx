import { useEffect, useRef, useState } from "react";
import { Icons } from './components';


const getMonthDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getMonthStartDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};

function App() {
  const [isOpenDataPicker, setIsOpenDatePicker] = useState(false);
  const dataPickerRef = useRef(null);
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rotate, setRotate] = useState(0);

  const openDataPeaker = () => {
    setIsOpenDatePicker(true);
  };

  const handleClickOutside = (event) => {
    if (dataPickerRef.current && !dataPickerRef.current.contains(event.target)) {
      setIsOpenDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const getMonthInfo = (offset) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    return {
      month: date.getMonth(),
      year: date.getFullYear(),
      days: getMonthDays(date.getFullYear(), date.getMonth()),
      startDay: getMonthStartDay(date.getFullYear(), date.getMonth())
    };
  };

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const handleDateClick = (day, monthOffset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);

    if (!selectedRange.start) {
      setSelectedRange({ start: newDate, end: null });
      console.log({ start: newDate, end: null })

    }
    else if (!selectedRange.end) {
      if (newDate < selectedRange.start) {
        setSelectedRange({ start: newDate, end: selectedRange.start });
        console.log({ start: newDate, end: selectedRange.start })

      } else {
        setSelectedRange({ start: selectedRange.start, end: newDate });
        console.log({ start: selectedRange.start, end: newDate })

      }
    }
    else {
      setSelectedRange({ start: newDate, end: null });
      console.log({ start: newDate, end: null })
    }
  };

  const renderCalendarMonth = (offset) => {
    const { month, year, days, startDay } = getMonthInfo(offset);

    return (
      <div className="text-center pb-4 rounded-lg">
        <div className="relative flex items-center justify-center text-gray-300">
          {offset < rotate && (
            <div className="absolute left-0">
              <button onClick={() => rotateDate("-")} className="text-xl bg-white rounded-full px-3 py-1">
                &lt;
              </button>
            </div>
          )}
          <p className="text-sm text-[#404040]">{monthNames[month]} {year}</p>
          {offset > rotate && (
            <div className="absolute right-0">
              <button onClick={() => rotateDate("+")} className="text-xl bg-white rounded-full px-3 py-1">
                &gt;
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-7 gap-1 text-gray-300 mt-4 text-sm">
          <p>Пн</p><p>Вт</p><p>Ср</p><p>Чт</p><p>Пт</p><p>Сб</p><p>Вс</p>
          {Array.from({ length: startDay === 0 ? 6 : startDay - 1 }).map((_, i) => (
            <div key={i}></div>
          ))}
          {Array.from({ length: days }).map((_, i) => {
            const currentDate = new Date(year, month, i + 1);
            return (
              <button
                key={i}
                onClick={() => handleDateClick(i + 1, offset)}
                className={`w-8 h-8 flex items-center justify-center rounded-md 
              ${selectedRange.start && currentDate.getTime() === selectedRange.start.getTime() ? 'bg-[#0076F5] text-white' : ''} 
              ${selectedRange.end && currentDate.getTime() === selectedRange.end.getTime() ? 'bg-[#0076F5] text-white' : ''} 
              ${selectedRange.start && selectedRange.end && currentDate.getTime() > selectedRange.start.getTime() && currentDate.getTime() < selectedRange.end.getTime() ? 'bg-[#F2F8FE] text-[#0076F5]' : ''} 
              hover:text-[#0076F5] hover:bg-[#F2F8FE]`}
              >
                {i + 1}
              </button>

            );
          })}
        </div>
      </div>



    );
  };

  const rotateDate = (operator) => {
    if (operator === "+") {
      setRotate(rotate + 1);
    } else if (operator === "-") {
      setRotate(rotate - 1);
    }
  };


  const handleTodayClick = () => {
    const today = new Date();
    const day = today.getDate();
    handleDateClick(day, 0);
  };


  const handleYesterdayClick = () => {
    const today = new Date();
    const day = today.getDate();
    handleDateClick(day - 1, 0)
  };

  const handleLast7DaysClick = () => {
    const today = new Date();
    const day = today.getDate();
    handleDateClick(day - 7, 0)
  };

  const handleLast30DaysClick = () => {
    const today = new Date();
    const day = today.getDate();
    handleDateClick(day - 30, 0)
  };

  const handleLast90DaysClick = () => {
    const today = new Date();
    const day = today.getDate();
    handleDateClick(day - 90, 0)
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };




  return (
    <div className="w-full">

      <div className="rounded-lg ml-5 mt-5 w-full max-w-6xl h-16 flex items-center bg-white border border-[#E5E5EA]">
        <div className="flex space-x-3">

          <div className="relative ml-4">
            <input
              type="text"
              className="pl-10 border h-8 text-sm border-[#E5E5EA] hover:border-[#0076F5]  focus:border-[#0076F5] placeholder-[#BBBBBB] hover:placeholder-[#404040]  focus:placeholder-[#404040]  rounded-md w-56 py-2 px-4 focus:outline-none"
              placeholder="Начните вводить слово"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icons icon="search" />
            </div>
          </div>


          <div ref={dataPickerRef}>
            <div
              onClick={openDataPeaker}
              className="w-56 h-8 border relative border-[#E5E5EA] hover:border-[#0076F5] focus:border-[#0076F5] text-[#BBBBBB] hover:text-[#404040] focus:text-[#404040] rounded-md flex items-center"
              tabIndex={0}
            >
              <Icons icon="calendar" className="ml-3" />
              <div className="flex space-x-1 text-center mx-auto items-center">
                <p className="text-sm">{formatDate(selectedRange?.start)}</p>
                {selectedRange.end && <span> - </span>}
                <p className="text-sm">{formatDate(selectedRange?.end)}</p>
              </div>
              <Icons icon="triangle" rotate={isOpenDataPicker} className="mr-2" />


              {isOpenDataPicker && (
                <div className="absolute flex top-full -ml-60 mt-2 w-[65.5rem] h-[20.5rem] border border-[#E5E5EA] rounded-md bg-[#FFFFFF]">
                  <div className="flex flex-col w-[29rem] pl-4 mt-4 max-w-[15.5rem]">
                    <div className="flex flex-col items-start text-sm text-[#404040] font-normal border-b border-[#E5E5EA] mr-4">
                      <button
                        onClick={handleTodayClick}
                        className="mb-2 font-normal hover:font-medium w-full text-left rounded-md pl-2 py-[0.4rem] hover:bg-[#F7F7F7]"
                      >
                        Сегодня
                      </button>

                      <button
                        onClick={handleYesterdayClick}
                        className="mb-2 font-normal hover:font-medium w-full text-left rounded-md pl-2 py-[0.4rem] hover:bg-[#F7F7F7]"
                      >
                        Вчера
                      </button>

                      <button
                        onClick={handleLast7DaysClick}
                        className="mb-2 font-normal hover:font-medium w-full text-left rounded-md pl-2 py-[0.4rem] hover:bg-[#F7F7F7]"
                      >
                        Последние 7 дней
                      </button>

                      <button
                        onClick={handleLast30DaysClick}
                        className="mb-2 font-normal hover:font-medium w-full text-left rounded-md pl-2 py-[0.4rem] hover:bg-[#F7F7F7]"
                      >
                        Последние 30 дней
                      </button>

                      <button
                        onClick={handleLast90DaysClick}
                        className="mb-2 font-normal hover:font-medium w-full text-left rounded-md pl-2 py-[0.4rem] hover:bg-[#F7F7F7]"
                      >
                        Последние 90 дней
                      </button>

                      <button className="mb-2 font-normal hover:font-medium w-full text-left rounded-md pl-2 py-[0.4rem] hover:bg-[#F7F7F7]">
                        От начала работы
                      </button>
                    </div>



                    <div className="mt-4 flex">
                      <button className="text-sm text-white bg-[#0076F5] hover:bg-[#1366BF] rounded-md py-[0.4rem] mr-8 px-4 font-medium">
                        Применить
                      </button>
                      <button className="text-sm text-[#0076F5] hover:text-[#1366BF]  font-medium">
                        Отменить
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-l w-full my-4 gap-4 p-2">
                    {renderCalendarMonth(rotate - 1)}
                    {renderCalendarMonth(rotate)}
                    {renderCalendarMonth(rotate + 1)}
                  </div>


                </div>
              )}
            </div>
          </div>



          <div className="flex items-center pl-3">
            <Icons icon="upload" />
            <Icons icon="triangle" color="#0076F5" />
          </div>


        </div>
        <div className="flex ml-auto mr-4 space-x-10">
          <button>
            <p className="text-sm font-normal text-[#404040] hover:text-[#0076F5]">Сбросить сортировку</p>
          </button>
          <button className="flex">
            <Icons icon="table" />
            <p className=" ml-2 text-sm font-normal text-[#404040]  hover:text-[#0076F5]">Настройки</p>
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;