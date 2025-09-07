import SignUpForms from './components/SignUpForms'

export const metadata = {
  title: "ثبت نام مشاور و کارشناس فروش امداد"
};
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section>
      <section className="mt-[62px] xl:mt-[80px] mb-[30px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold">
        <h1 className="xl:text-[40px] text-[24px] font-bold text-center px-10">ثبت نام مشاور و کارشناس فروش امداد</h1>
      </section>
      <SignUpForms />
    </section>
  );
}
