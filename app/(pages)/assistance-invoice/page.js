import FormsLink from './components/FormsLink'
import Invoice from '../../../public/assets/svg/invoice.svg'
import InvoiceFree from '../../../public/assets/svg/invoice-free.svg'
export const metadata = {
  title: "صدور فاکتور امدادگران",
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
    <>
      <section className="grid grid-cols-1 gap-8 xl:grid-cols-2 mt-28">
        <FormsLink link="/assistance-invoice/has-insurance-invoice" icon={Invoice} text="ارسال فاکتور امدادگر برای کاربران دارای بیمه نامه یدک" />
        <FormsLink link={"/assistance-invoice/free-invoice"} icon={InvoiceFree} text="صدور فاکتور الکترونیکی برای کاربران فاقد بیمه نامه حمل (آزاد)" />
      </section>
    </>
  );
}
