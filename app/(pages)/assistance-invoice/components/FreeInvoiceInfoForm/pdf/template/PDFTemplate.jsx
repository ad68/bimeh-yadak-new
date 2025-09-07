import { cardNumberFormat, numberWithCommas } from "@/helper";
import { useState, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const MyDocument = ({
    date, number, name, nationalCode, carType, phoneNumber,
    assistanceName,
    assistanceId,
    assistanceNationalCode,
    assistanceCarType,
    assistancePhoneNumber,
    shebaNumber,
    cardNumber,
    bankName,
    tax,
    total,
    entranceFee,
    preparationCost,
    stoppingCost,
    shippingInsuranceCost,
    licenseCode1,
    alphabetCode,
    licenseCode2,
    provinceCode,
    assLicenseCode1,
    assAlphabetCode,
    assLicenseCode2,
    assProvinceCode,
    userSign,
    assistanceSign,
    additionalEntryKm,
    additionalEntryFee,
    additionalEntryFinalFee,
    clinicalAssistanceEntryFee,
    clinicalAndMobileRepairFee,
    sparePartsFee,
    setupFee,
    otherItemsFee,
    onSiteTireRepairFee,
    roundTripTireRepairFee,
    spareTireReplacementFee,
    fuelDeliveryFee,
    batterySaleFee,
    diagFee,
    carDoorOpeningFee,
    vehicleExtractionSandSnowEtcFee,
    onSiteOilChangeFee,
    saleOfEngineOilBrakeFluidAntifreezeFee,
    imageUrl

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
    const LabelValue = ({ label, value }) => {
        return (<View style={{ display: "flex", width: "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "flex-start", padding: "10px" }}>
            <View style={{ textAlign: "center" }}>
                <Text>{label}</Text>
            </View>
            <View style={{ textAlign: "center" }}>
                <Text style={{ fontFamily: "yekan-bold" }}>{value}</Text>
            </View>
        </View>)
    }
    const LabelValueCenter = ({ label, value, width }) => {
        return (<View style={{ display: "flex", width: width ? width : "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "flex-start", padding: "10px" }}>
            <View style={{ textAlign: "right" }}>
                <Text>{label}</Text>
            </View>
            <View style={{ textAlign: "right" }}>
                <Text style={{ fontFamily: "yekan-bold" }}>{value}</Text>
            </View>
        </View>)
    }
    const styles = StyleSheet.create({
        page: {
            padding: 20, fontSize: 10, fontFamily: 'yekan', direction: 'rtl', textAlign: 'justify',
            borderWidth: 5,
            borderColor: "#F3C401",
        },
        flexBox: { display: "flex", flexDirection: "row-reverse", alignItems: "center" },
        section: { marginBottom: 10, display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'justify' },
        imageBox: { border: "1px solid silver", borderRadius: "5px", width: "100px", height: "100px" },
        textBox: { display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'right' },
        plateBox: { display: "flex", fontFamily: "yekan-bold", flexDirection: "row", textAlign: 'right', gap: "2px", marginLeft: 5 },
        bold: { fontFamily: "yekan-bold" },
        link: { color: 'blue', textDecoration: 'underline' },
        px5: { paddingLeft: 2, paddingRight: 2 },
        singBox: { width: "120px", height: "120px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" },
        signText: { fontSize: "8px" },
        table: {
            width: '100%',
            marginTop: 10,
            border: "1px solid silver",
        },
        tableRow: {
            flexDirection: 'row-reverse',
            borderBottomWidth: 1, // خط پایین برای هر ردیف
            borderBottomColor: '#ddd',
        },
        tableHeader: {
            backgroundColor: '#f2f2f2',
            padding: 5,

        },
        tableCell: {
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: "silver",
            textAlign: "center"
        },
        tableCellHeader: {
            padding: 5,
            textAlign: 'center',
            fontWeight: 'bold',
        },

        column1: {
            width: '10%',
        },
        column2: {
            width: '45%',
        },
        column3: {
            width: '11%',
        },
        column4: {
            width: '11%',
        },
        column5: {
            width: '45%',
        },
        column6: {
            width: '18%',
        },
    });
    return <>
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse", height: "50px" }}>
                        <View style={{ width: "130px", flexDirection: "row", display: "flex", justifyContent: "flex-end" }}>
                            {/* <Image src={imageUrl} style={{ width: "100px", height: "100px", border: "1px solid red" }} alt="" /> */}
                            <View style={{ width: "100px", height: "100px", border: "1px solid silver", display: "flex", padding: "10px", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: "yekan-bold", fontSize: 10 }}>محل الصاق عکس امدادگر</Text>
                            </View>
                        </View>

                        <View style={{ width: "130px", flexDirection: "row", display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontFamily: "yekan-bold", fontSize: 15 }}>بسمه تعالی</Text>
                        </View>
                        <View style={{ width: "130px" }}>
                            <View style={{ ...styles.flexBox, gap: "3px", }}>
                                <Text> :تاریخ</Text>
                                <Text>{date}</Text>
                            </View>
                            <View style={{ ...styles.flexBox, gap: "3px", marginTop: "10px" }}>
                                <Text> :شماره</Text>
                                <Text>{number}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: "flex", justifyContent: "center", flexDirection: "row-reverse", height: "50px" }}>
                        <View style={{ textAlign: "center" }}>
                            <Text style={{ fontFamily: "yekan-bold", fontSize: 15 }}>فاکتور الکترونیکی امدادگر امدادخودرو</Text>
                        </View>

                    </View>
                </View>

                <View style={{ ...styles.flexBox, marginTop: "20px" }}>
                    <Text style={{ fontFamily: 'yekan-bold', fontSize: "12px" }}>:مشخصات امدادگر</Text>
                </View>
                <View style={{ border: "1px solid silver", border: "1px solid silver", borderRadius: "10px" }}>
                    <View style={{ ...styles.flexBox, justifyContent: "space-between" }}>
                        <view style={styles.flexBox}>
                            <LabelValue label=":نام و نام خانوادگی" value={assistanceName} />
                            <LabelValue label=":کد ملی" value={assistanceNationalCode} />
                            <LabelValue label=":کد شناسه امدادگر" value={assistanceId} />
                        </view>
                    </View>
                    <View style={{ ...styles.flexBox, justifyContent: "space-between" }}>
                        <view style={styles.flexBox}>
                            <LabelValue label=":خودرو امدادگر" value={assistanceCarType} />
                            <View style={{ display: "flex", width: "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "center", padding: "10px" }}>
                                <View style={{ textAlign: "center" }}>
                                    <Text>:شماره پلاک</Text>
                                </View>
                                <View style={{ textAlign: "center" }}>
                                    <View style={styles.plateBox}>
                                        <Text>{assLicenseCode1}</Text>
                                        <Text>{assAlphabetCode}</Text>
                                        <Text>{assLicenseCode2}</Text>
                                        <Text>ایران</Text>
                                        <Text> {assProvinceCode}</Text>
                                    </View>
                                </View>
                            </View>
                            <LabelValue label=":تلفن تماس" value={assistancePhoneNumber} />

                        </view>
                    </View>

                </View>
                <View style={{ ...styles.flexBox, marginTop: "20px" }}>
                    <Text style={{ fontFamily: 'yekan-bold', fontSize: "12px" }}>:مشخصات امداد خواه</Text>
                </View>
                <View style={{ border: "1px solid silver", border: "1px solid silver", borderRadius: "10px" }}>
                    <View style={{ ...styles.flexBox, justifyContent: "space-between" }}>
                        <view style={styles.flexBox}>
                            <LabelValue label=":نام و نام خانوادگی" value={name} />
                            <LabelValue label=":کد ملی" value={nationalCode} />
                            <LabelValue label=":نوع خودرو" value={carType} />
                        </view>
                    </View>
                    <View style={{ ...styles.flexBox, justifyContent: "space-between" }}>
                        <view style={styles.flexBox}>
                            <View style={{ display: "flex", width: "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "center", padding: "10px" }}>
                                <View style={{ textAlign: "center" }}>
                                    <Text>:شماره پلاک</Text>
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
                            <LabelValue label=":تلفن تماس" value={phoneNumber} />
                            <LabelValue label="" value={""} />
                        </view>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>1</Text>
                        <Text style={[styles.tableCell, styles.column2]}>ورودی به ازای ۱۰ کیلومتر</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(entranceFee ?? 0)}
                        </Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>2</Text>
                        <Text style={[styles.tableCell, styles.column2]}>هزینه آماده سازی</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(preparationCost ?? 0)}
                        </Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>3</Text>
                        <Text style={[styles.tableCell, styles.column2]}>هزینه توقف به ازای هر ساعت</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(stoppingCost ?? 0)}
                        </Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>4</Text>
                        <Text style={[styles.tableCell, styles.column2]}>هزینه بیمه حمل</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(shippingInsuranceCost ?? 0)}
                        </Text>
                    </View>
                    {additionalEntryFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>5</Text>
                        <Text style={[styles.tableCell, styles.column2]}>  (کیلومتر * مبلغ هر کیلومتر) هزینه مازاد بر 10 کیلومتر</Text>
                        <Text style={[styles.tableCell, styles.column5]}>{additionalEntryFee ? `(${numberWithCommas(additionalEntryFee)} * ${additionalEntryKm})` : 0} {(numberWithCommas(additionalEntryFinalFee))}</Text>
                    </View>}

                    {
                        clinicalAssistanceEntryFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>6</Text>
                            <Text style={[styles.tableCell, styles.column2]}>ورودی امداد بالینی</Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(clinicalAssistanceEntryFee ?? 0)}
                            </Text>
                        </View>
                    }

                    {clinicalAndMobileRepairFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>7</Text>
                        <Text style={[styles.tableCell, styles.column2]}>اجرت تعمیر بالینی و سیار</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(clinicalAndMobileRepairFee ?? 0)}
                        </Text>
                    </View>}

                    {sparePartsFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>8</Text>
                        <Text style={[styles.tableCell, styles.column2]}>هزینه لوازم یدکی</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(sparePartsFee ?? 0)}
                        </Text>
                    </View>}

                    {setupFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>9</Text>
                        <Text style={[styles.tableCell, styles.column2]}>آماده سازی</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(setupFee ?? 0)}
                        </Text>
                    </View>}
                    {otherItemsFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>10</Text>
                        <Text style={[styles.tableCell, styles.column2]}>سایر موارد</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(otherItemsFee ?? 0)}
                        </Text>
                    </View>}
                    {onSiteTireRepairFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>11</Text>
                        <Text style={[styles.tableCell, styles.column2]}>پنچرگیری درمحل</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(onSiteTireRepairFee ?? 0)}
                        </Text>
                    </View>}

                    {roundTripTireRepairFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>12</Text>
                        <Text style={[styles.tableCell, styles.column2]}>پنچرگیری رفت و برگشت</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(roundTripTireRepairFee ?? 0)}
                        </Text>
                    </View>}

                    {
                        spareTireReplacementFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>13</Text>
                            <Text style={[styles.tableCell, styles.column2]}>تعویض زاپاس</Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(spareTireReplacementFee ?? 0)}
                            </Text>
                        </View>
                    }

                    {
                        fuelDeliveryFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>14</Text>
                            <Text style={[styles.tableCell, styles.column2]}>سوخت رسانی</Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(fuelDeliveryFee ?? 0)}
                            </Text>
                        </View>
                    }
                    {
                        batterySaleFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>15</Text>
                            <Text style={[styles.tableCell, styles.column2]}>فروش باطری</Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(batterySaleFee ?? 0)}
                            </Text>
                        </View>
                    }


                    {diagFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>16</Text>
                        <Text style={[styles.tableCell, styles.column2]}>دیاگ</Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(diagFee ?? 0)}
                        </Text>
                    </View>}
                    {
                        carDoorOpeningFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>17</Text>
                            <Text style={[styles.tableCell, styles.column2]}>بازکردن درب خودرو</Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(carDoorOpeningFee ?? 0)}
                            </Text>
                        </View>
                    }
                    {vehicleExtractionSandSnowEtcFee && <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>18</Text>
                        <Text style={[styles.tableCell, styles.column2]}>
                            بیرون کشیدن خودرو از ماسه و برف و غیره
                        </Text>
                        <Text style={[styles.tableCell, styles.column5]}>
                            {numberWithCommas(vehicleExtractionSandSnowEtcFee ?? 0)}
                        </Text>
                    </View>}

                    {
                        onSiteOilChangeFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>19</Text>
                            <Text style={[styles.tableCell, styles.column2]}>تعویض روغن در محل</Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(onSiteOilChangeFee ?? 0)}
                            </Text>
                        </View>
                    }


                    {
                        saleOfEngineOilBrakeFluidAntifreezeFee && <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.column1]}>20</Text>
                            <Text style={[styles.tableCell, styles.column2]}>
                                فروش روغن موتور و ترمز و ضدیخ
                            </Text>
                            <Text style={[styles.tableCell, styles.column5]}>
                                {numberWithCommas(saleOfEngineOilBrakeFluidAntifreezeFee ?? 0)}
                            </Text>
                        </View>
                    }

                </View>
                {/*   <View style={{ display: "flex", flexDirection: "row-reverse", gap: "5px", justifyContent: "flex-end" }}>
                    <View style={{ width: "150px", height: "30px", paddingTop: "7px" }}><Text>(10%)مالیات ارزش افزوده - تومان</Text></View>
                    <View style={{ width: "99px", height: "30px", border: "1px solid silver", display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}><Text>{tax}</Text></View>
                </View> */}
                <View style={{ display: "flex", flexDirection: "row-reverse", gap: "5px", justifyContent: "flex-end" }}>
                    <View style={{ width: "99px", height: "30px", paddingTop: "7px" }}><Text>جمع کل (تومان)</Text></View>
                    <View style={{ width: "99px", height: "30px", border: "1px solid silver", display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}><Text>{total}</Text></View>
                </View>

                <View style={{ marginTop: "20px" }}><Text style={{ textAlign: "right" }}>مبلغ این فاکتور با امضا و ارسال کد تایید به شماره تلفن امداد خواه (مشتری) مورد تایید قرار گرفته و از خدمات و پرداخت هزینه رضایت کامل </Text></View>
                <Text style={{ textAlign: "right" }}>
                    .خود را اعلام میدارد
                </Text>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
                    <LabelValueCenter label=":شماره شبا" value={shebaNumber} />
                    <LabelValueCenter label=":شماره کارت" value={cardNumberFormat(cardNumber)} />
                    <LabelValueCenter label=":بانک" value={bankName} />
                </View>
                <View><Text style={{ textAlign: "right" }}>به نام  {assistanceName} واریز انجام می گردد</Text></View>
                <View style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", marginTop: "30px" }}>
                    <View style={styles.singBox}>
                        <Text style={styles.signText}>:امضای امدادگر</Text>
                        <Image style={{ width: "100px", height: "100px" }} src={assistanceSign} alt="" />
                    </View>
                    <View style={styles.singBox}>
                        <Text style={styles.signText}>:امضای امدادخواه</Text>
                        <Image style={{ width: "100px", height: "100px" }} src={userSign} alt="" />
                    </View>
                </View>
            </Page>
        </Document>
    </>

}

export default MyDocument