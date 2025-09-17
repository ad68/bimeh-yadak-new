"use client";
function Index({ title, dark, state, style, setState }) {
  // تابع جداکننده سه رقمی
  const formatNumber = (num) => {
    if (!num) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    // فقط عدد رو می‌گیریم
    const rawValue = e.target.value.replace(/\D/g, "");
    setState(rawValue); // استیت فقط عدد خام
  };

  return (
    <section className="relative">
      <span
        className={`absolute left-[10px] top-[10px] pt-[7px] text-[13px] ${dark && "text-white"
          }`}
      >
        {title}
      </span>
      <input
        placeholder={title}
        min={0}
        value={formatNumber(state)} // نمایش سه‌رقمی
        onChange={handleChange}
        style={{ ...style }}
        className={`${dark ? "border-[#2f2f2f80] bg-[#2f2f2f80] text-white" : ""
          } mx-0 h-[50px] w-full rounded-[4px] border-[2px] p-[15px] pl-[50px] text-xs outline-none transition-all duration-300 focus:border-[#0165e1]`}
      />
    </section>
  );
}

export default Index;
