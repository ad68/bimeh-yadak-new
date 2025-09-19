import { numberWithCommas } from "@/helper";
import { useState, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const MyDocument = ({
    name,
    coverageAmount,
    alphabetCode,
    licenseCode1,
    licenseCode2,
    provinceCode,
    carName,
    vin,
    insurancePolicyNumber,
    nationalCode,
    issueInsurancePolicy,
    expireInsurancePolicy,
    startInsurancePolicy
}) => {
    const [ReactPDF, setReactPDF] = useState(null);
    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <div>در حال بارگذاری...</div>;

    const { Document, Page, Text, View, StyleSheet, Font, Image } = ReactPDF;
    Font.register({
        family: "yekan",
        src: "/fonts/vazir/yekan.ttf",
    });
    Font.register({
        family: "yekan-bold",
        src: "/fonts/vazir/yekan-bold.ttf",
    });
    const styles = StyleSheet.create({
        page: {
            padding: 20, fontSize: 10, fontFamily: 'yekan', direction: 'rtl', textAlign: 'justify',
            borderWidth: 15,
            borderColor: "#F3C401",
        },
        section: { marginBottom: "5px", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'justify' },
        textBox: { display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'right' },
        plateBox: { display: "flex", fontFamily: "yekan-bold", flexDirection: "row", textAlign: 'right', gap: "2px", marginLeft: 5 },
        bold: { fontFamily: "yekan-bold" },
        link: { color: 'blue', textDecoration: 'underline' },
        px5: { paddingLeft: 2, paddingRight: 2 },
        line: { width: "100%", borderBottom: "4px solid #ffeda2", heigh: "1px", marginBottom: 20, marginTop: 15 },
        footer: { position: "absolute", bottom: 0, width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" },
        flexBox: {
            display: "flex", flexDirection: "row-reverse",

        }
    });
    const LabelValue = ({ label, value }) => {
        return (<View style={{ display: "flex", width: "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "center", border: "1px solid silver", padding: "10px" }}>
            <View style={{ textAlign: "center" }}>
                <Text>{label}</Text>
            </View>
            <View style={{ textAlign: "center" }}>
                <Text style={{ fontFamily: "yekan-bold" }}>{value}</Text>
            </View>
        </View>)
    }
    return <>
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <View style={{ display: "flex", flexDirection: "row-reverse", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <View style={{ display: "flex", flexDirection: "row-reverse", gap: 10, alignItems: "center" }}>
                                <View>
                                    <Image alt="" src="/icons/logo.png" style={{ width: 40 }} />
                                    <Text style={{ fontSize: 10, fontFamily: "yekan-bold" }}>بیمه یدک</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, fontFamily: "yekan-bold", color: "#616161" }}>بیمه گذار محترم آقا یا خانم <Text>{name}</Text></Text>
                                    <View style={{ display: "flex", flexDirection: "row-reverse", gap: 10, alignItems: "center" }}>
                                        <Text style={{ fontSize: 10, fontFamily: "yekan-bold" }}>:کد ملی</Text>
                                        <Text style={{ fontSize: 10, fontFamily: "yekan-bold" }}>{nationalCode}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Image alt="" src="/icons/razi.png" style={{ width: 40 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-end" }}>
                        <Text style={{ fontSize: 10 }}>:کد رهگیری</Text>
                        <Text style={{ fontSize: 10, fontFamily: "yekan-bold" }}>{insurancePolicyNumber}</Text>
                    </View>

                    <View style={styles.line}></View>
                    <View style={styles.section}>
                        <Text style={styles.textBox}>با عنایت به درخواست آنلاین بیمه نامه، حمل رایگان خودرو با مشخصات ذیل ثبت گردید و با توجه به شرایط 3 روز انتظار در بیمه نامه، شرکت بیمه دی پوشش امداد را تا سقف تعهدات حداکثر تا 72 ساعت دیگر برای خودرو فعال می نماید.</Text>

                        <View style={{ display: "flex", flexDirection: "row-reverse", marginTop: "10px" }}>

                            <LabelValue label=":نوع خودرو" value={carName} />
                            <View style={{ display: "flex", width: "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "center", border: "1px solid silver", padding: "10px" }}>
                                <View style={{ textAlign: "center" }}>
                                    <Text>:شماره انتظامی</Text>
                                </View>
                                <View style={{ textAlign: "center" }}>
                                    <View style={styles.plateBox}>
                                        <Text>{licenseCode1}</Text>
                                        <Text>{alphabetCode}</Text>
                                        <Text>{licenseCode2}</Text>
                                        <Text>ایران</Text>
                                        <Text> {provinceCode}</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={styles.flexBox}>
                            <LabelValue label=":VIN شماره" value={vin} />
                            <LabelValue label=":سقف تعهدات (تومان)" value={numberWithCommas(coverageAmount)} />
                        </View>
                        <View style={styles.flexBox}>
                            <LabelValue label=":تاریخ صدور بیمه نامه" value={issueInsurancePolicy} />
                            <LabelValue label=": تاریخ انقضا بیمه نامه" value={expireInsurancePolicy} />
                        </View>
                        <View style={styles.flexBox}>
                            <LabelValue label=":تاریخ شروع تعهدات" value={startInsurancePolicy} />
                            <LabelValue label=":نام کارگزار بیمه" value={"مباشر"} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ ...styles.textBox, ...styles.bold }}>موارد قابل پوشش:</Text>
                        <Text style={styles.textBox}>1- حادثه</Text>
                        <Text style={styles.textBox}>2- خرابی غیر قابل تعمیر در محل</Text>
                        <Text style={styles.textBox}>3- بیمه یدک شامل خودروهای توقیف‌شده و پارک‌شده در پارکینگ‌های مناطق آزاد نمی‌شود.</Text>
                        <Text style={styles.textBox}>4- در صورت تصادف، بیمه یدک فقط شامل خودروی مقصر خواهد بود.</Text>
                        <Text style={styles.textBox}>5- بیمه یدک از زمان صدور، برای خودروهای سبک داخلی دارای سه روز دوره انتظار و برای خودروهای مناطق آزاد هفت روز دوره انتظار است.</Text>
                        <Text style={styles.textBox}>6- حق بیمه یدک برای خودروهای مناطق آزاد، در صورت تخفیف ۱۰٪ از سقف تعهدات و در صورت عدم تخفیف ۲۰٪ از سقف تعهدات خواهد بود.</Text>
                        <Text style={styles.textBox}>7- خدمات حمل در بیمه یدک، شامل اتمام سوخت خودرو نمی‌شود.</Text>
                        <Text style={styles.textBox}>8- بیمه یدک خدمات حمل در صورت پنچری خودرو را پوشش نمی‌دهد.</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "flex-start", marginTop: "10px" }}>
                        <View style={{ width: "350px" }}>
                            <Text style={{ ...styles.textBox, ...styles.bold }}>مدارک مورد نیاز:</Text>
                            <Text style={styles.textBox}>1- کارت ماشین</Text>
                            <Text style={styles.textBox}>2- کارت ملی یا گواهینامه</Text>
                            <Text style={styles.textBox}>3- فاکتور تعمیرگاه</Text>
                            <Text style={styles.textBox}>4- فاکتور امدادگر</Text>
                        </View>
                        <View style={{ width: "350px" }}>
                            <Text style={{ ...styles.textBox, ...styles.bold }}>روش های اعلام خسارت</Text>
                            <View>
                                <Text style={styles.textBox}>1- شماره تلفن مرکز امداد خودرو</Text>
                                <Text style={styles.textBox}>2- سایت www.bimehyadak.com</Text>

                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text>:تلفن امدادهای طرف قرارداد</Text>
                        <View style={{ ...styles.section, ...styles.px5 }}>
                            <Text>1593</Text>
                            <Text> و </Text>
                            <Text>90001593</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.section, display: "flex", flexDirection: "row-reverse" }}>
                        <Text style={styles.bold}> :نکته</Text>
                        <Text style={{ textAlign: "right" }}>حمل خودرو توسط امدادگر به صورت رایگان تا سقف تعهدات بیمه نامه صورت می گیرد و امدادگر هزینه های خود را از شرکت بیمه دی وفق مستندات دریافت می کند</Text>

                    </View>

                </View>
                <View >
                    <View style={{ paddingLeft: "50px" }}>
                        <Text>مهر و امضاء</Text>
                    </View>
                    <Image alt="" src="/assets/images/razi-sign.png" style={{ width: 120 }} />
                </View>
                <View style={styles.footer}>
                    <Text>  (سناپ) توسعه داده شده توسط شرکت سامانه نوآوری ایرانیان پوشش</Text>
                </View>
            </Page >
        </Document >
    </>

}

export default MyDocument