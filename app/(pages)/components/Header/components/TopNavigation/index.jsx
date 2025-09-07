"use client";
import MenuLink from './components/MenuLink'
const TopNavigation = () => {
  return (
    <>
      <ul className="flex flex-col gap-4 text-[14px] font-semibold leading-6 antialiased md:flex md:flex-row md:items-center	">
        <MenuLink title="خانه" link="/" />
        <MenuLink title="خرید بیمه نامه" link="/relief-signup" />
        <MenuLink title="درخواست امداد خودرو" link="/request-relief" />
        <MenuLink title="مشاور و کارشناس فروش" link="/marketing" />
        <MenuLink title="ثبت نام امدادگران" link="/road-assistance-signup" />

        <MenuLink title="مجله" link="https://mag.bimehyadak.com" />
        <MenuLink title="درباره ما" link="/about" />
        <MenuLink title="تماس با ما" link="/contact-us" />

      </ul>
    </>
  );
};

export default TopNavigation;
