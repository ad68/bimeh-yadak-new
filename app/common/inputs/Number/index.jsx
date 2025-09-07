"use client";
function index({ title, dark, state, style, setState }) {
  return (
    <section className="relative">
      <span
        className={`absolute left-[10px] top-[10px] pt-[7px]  text-[13px] ${dark && "text-white"}`}
      >
        {title}
      </span>
      <input
        placeholder={title}
        min={0}
        value={state}
        onChange={(e) => setState(e.target.value.replace(/\D/g, ""))}
        style={{ ...style }}
        className={`${dark ? "border-[#2f2f2f80] bg-[#2f2f2f80] text-white" : ""} mx-0 h-[50px]  w-full rounded-[4px] border-[2px] p-[15px] pl-[50px] text-xs outline-none transition-all duration-300 focus:border-[#0165e1]`}
      />
    </section>
  );
}

export default index;
