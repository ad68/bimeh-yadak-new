"use client"
import { Button } from "@/common";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ setSign }) => {
    const sigPad2 = useRef(null);

    const clear = () => {
        sigPad2.current?.clear();
        setSign(false)
    };

    const save = () => {
        if (sigPad2.current) {
            const signatureData = sigPad2.current.toDataURL("image/png");
            console.log(signatureData);
            setSign(signatureData)
        }
    };

    return (
        <section className="w-full m-auto">
            <h1>امضای امدادخواه</h1>
            <section className="w-[300px] h-[300px] p-[10px] border rounded-md">
                <SignatureCanvas
                    ref={sigPad2}
                    penColor="black"
                    onEnd={save}

                    canvasProps={{ width: 290, height: 290, className: "sigCanvas", border: "1px solid silver !important" }}
                />
            </section>
            <section className="flex gap-5 mt-5">
                <Button type="button" onClick={clear}>پاک کردن</Button>
                {/*   <Button type="button" onClick={save}>ذخیره</Button> */}
            </section>

        </section>
    );
};

export default SignaturePad;