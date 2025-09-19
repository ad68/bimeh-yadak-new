import Image from "next/image";
import Items from "./components/Items";
import Service from "./components/Service";
import Link from "next/link";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export const metadata = {
  title: "درباره ما",
};
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="">
        <section className="mt-[80px] mb-[40px] flex h-[150px] w-full items-center justify-center bg-primary font-bold  ">
          <h1 className="xl:text-[40px] text-[36px]"> درباره بیمه یدک </h1>
        </section>
        <section className="flex items-center justify-center gap-2">
          <section className="bg-white h-[75px] xl:h-[110px] mt-2">
            <Image src={"/icons/sanap.svg"} width={110} height={110} className="xl:h-[100px] xl:w-[110px] w-[75px]  h-[60px] place-self-end mt-2" alt="" />
          </section>
        </section>
        <section className="xl:w-[1366px] w-[90%] m-auto max-w-full mt-5">
          <section className="text-justify">
            <p className="leading-10">
              بیمه یدک یک محصول و خدمت جديد بیمه‌ای است که توسط کارگزاری رسمی بيمه برخط مباشر شماره پروانه فعالیت ١٨٧٨ تحت نظارت بیمه مرکزی‌ جمهوری اسلامی ایران با همکاری انجمن <Link href="https://emdadkhodro1593.ir/" className="text-blue underline">امدادخودرو</Link> کشوری توسط شرکت فناوری <Link href="https://sanaap.com/" className="text-blue underline">سناپ</Link> ( سامانه نو آوری ایرانیان پوشش)طراحی و پیاده سازی شده است. این خدمت بعنوان یک محصول بیمه‌ای مكمل براي هموطنان گرامي و مالكین محترم وسایل نقلیه موتوری زمینی می‌باشد که موجب آرامش خاطر در زمان بروز حوادث و نقص‌هاي فني (غیر قابل تعمیر) ميگردد که از یک سو از تحميل هزينه‌هاي نامتعارف مازاد جلوگیری نموده و از سوی دیگر از سوء استفاده افراد فرصت طلب
              خودداری می‌کند که این پوشش در اکثر کشورها متداول و در حال ارائه است.
            </p>
            <p className="leading-10">با توجه به مشكلات و شکایت‌های متعدد دارندگان خودرو و عدم رعايت تعرفه مصوب نرخ حمل و امداد از عملکرد و نحوه خدمات خودروهای امدادگرنما (یدک کش و چرخگیر نیسان و کامیونت‌های خودروبر) در زمان نیاز، برای پيشگيري از عدم رعايت استانداردهاي امداد و يا حمل غير اصولي توسط امدادگران فاقد صلاحيت و سود جو و متخلف در کشور برای اولین بار بمناسبت ۲۲ بهمن «بیمه یدک» رونمایی شده است.</p>
            <p className="leading-10">دارندگان وسایل نقلیه موتوری زمینی می توانند ریسک حمل خودرو خود را در اثر حوادث غير مترقبه ، نقص هاي فني منجر به توقف یا تصادف (در صورتي كه مقصر باشند )بمدت یکسال از سقف ۵۰ میلیون ریال تا ۲۵۰ میلیون ریال با حق بيمه اي ناچيز به شرکت بیمه دی منتقل نمایند. </p>
            <p className="leading-10">در طول مدت این بیمه نامه دارندگان خودرو‌ بعنوان بیمه گذار برای خودرو خود تعهدات تا سقف پوشش مورد درخواست خریداری نموده و هیچ مبلغی را براي امداد پرداخت نمی نمايند.</p>
            <p className="leading-10">بنابراين تمام هزینه‌های حمل در امداد با تایید تعاونی امداد‌خودرو کشوری آتیه سازان سبز بعنوان عامل خدمات رسانی از طرف انجمن صنفی <Link href="https://emdadkhodro1593.com/" className="text-blue underline">امدادخودرو</Link> کشور، خدمات رسانی و یا فاکتور امدادگر تایید می‌گردد که این هزینه توسط بیمه دی مستقیم بحساب امداد گر واریز خواهد شد.</p>
          </section>
          <section className="mt-8 xl:flex justify-center grid gap-6 xl:gap-[80px]">
            <section className="grid gap-6">
              <Items text={"چندین سال سابقه"} />
              <Items text={"بروزترین دستگاه ها"} />
              <Items text={"حضور سریع امدادگران"} />
              <Items text={"عیب یابی و تعمیر وسیله نقلیه"} />
              <Items text={"تحت نظارت انجمن صنفی امداد خودرو کشور"} />
            </section>
            <section className="grid gap-4">
              <Items text={"کادر مجرب و متخصص"} />
              <Items text="دارای مجوز از درگاه مجوزها" />
              <Items text="دارای مجوز از سازمان تنظیم مقررات" />
              <Items text={"جوابگویی بصورت ۲۴ ساعته"} />
              <Items text={"حمل خودرو به نزدیکترین تعمیرگاه"} />
            </section>
          </section>
        </section>
        <section className="xl:w-[1366px] w-[90%] m-auto max-w-full xl:flex justify-center xl:gap-16 mt-14 grid grid-cols-2 justify-items-center  gap-6">
          <Service text={"قیمت مناسب"} img={"/icons/قیمت.png"} />
          <Service text={"اعزام سریع"} img={"/icons/عازم-سریع.png"} />
          <Service text={"دارای تخصص"} img={"/icons/متخصص.png"} />
          <Service text={"۲۴/۷ پشتیبانی"} img={"/icons/پشتیبانی.png"} />
        </section>
      </section>
    </>
  );
}
