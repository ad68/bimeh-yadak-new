import { Suspense } from "react";
import SignUp from "./components/SingUp";



export const metadata = {
  title: "ثبت نام امدادگران"
};
const Index = () => {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
};
export default Index;
