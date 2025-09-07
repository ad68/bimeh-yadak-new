"use client"
import { Button } from "@/common";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
    const sigPad = useRef(null);

    const clear = () => {
        sigPad.current?.clear();
    };

    const save = () => {
        if (sigPad.current) {
            const signatureData = sigPad.current.toDataURL("image/png");
            console.log(signatureData);
        }
    };

    return (
        <section className="w-[600px] h-[200px] m-auto mt-[200px] mb-[500px]">
            <section className="w-[400px] h-[400px] border rounded-md">
                <SignatureCanvas
                    ref={sigPad}
                    penColor="black"
                    canvasProps={{ width: 400, height: 400, className: "sigCanvas", border: "1px solid silver !important" }}
                />
            </section>

            <section className="flex gap-5 mt-5">
                <Button onClick={clear}>پاک کردن</Button>
                <Button onClick={save}>ذخیره</Button>
            </section>

        </section>
    );
};

export default SignaturePad;