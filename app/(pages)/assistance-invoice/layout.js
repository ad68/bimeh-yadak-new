"use client";


export default function Layout({ children }) {

  return (
    <section>
      <section className="mt-[62px] xl:mt-[80px] mb-[30px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h1 className="xl:text-[40px] text-[24px] font-bold text-center px-10">صدور فاکتور امدادگران</h1>
      </section>
      <section className="w-[1200px] max-w-[90%] m-auto p-5 rounded-md">
        {children}
      </section>
    </section>
  );
}
