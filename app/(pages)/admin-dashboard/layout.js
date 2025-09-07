"use client";
import Sidebar from "./components/SideBar";

export default function Layout({ children }) {
  /* useEffect(() => {
    if (!isAdmin()) {
      router.push("/login");
    }
  }, []); */
  return (
    <section className="mt-[96px] flex justify-center gap-[26px] md:mt-[112px] md:overflow-y-scroll">
      <Sidebar />
      <section className="mx-auto mb-1 h-auto min-h-[879px] w-[90%] rounded-[10px] pb-[20px]  md:border md:border-solid md:border-[#8B929A36] md:px-12 md:pt-6 xl:mx-0 xl:w-[1057px] xl:max-w-[95%] xl:p-[24px]">{children}</section>
    </section>
  );
}
