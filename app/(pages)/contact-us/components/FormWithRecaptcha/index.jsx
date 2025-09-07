"use client";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const FormWithRecaptcha = ({ setIsVerified }) => {
  const recaptchaRef = useRef(null);
  const handleVerify = (token) => {
    if (token) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  return (
    <section>
      <ReCAPTCHA hl="fa" ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleVerify} />
    </section>
  );
};

export default FormWithRecaptcha;
