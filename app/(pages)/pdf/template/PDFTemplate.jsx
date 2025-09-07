import { useState, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const MyDocument = ({
    date, number, image, name, nationalCode, carType, phoneNumber,
    plateNumber,
    bimehYadakNumber,
    assistanceName,
    assistanceId,
    assistanceNationalCode,
    assistanceCarType,
    assistancePhoneNumber,
    assistancePlateNumber,
    shebaNumber,
    cardNumber,
    bankName,
    tax, total
}) => {
    const [ReactPDF, setReactPDF] = useState(null);
    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <div>در حال بارگذاری...</div>;

    const { Document, Page, Text, View, StyleSheet, Font } = ReactPDF;
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
        return (<View style={{ display: "flex", width: width ? width : "100%", gap: 2, flexDirection: "row-reverse", justifyContent: "center", padding: "10px" }}>
            <View style={{ textAlign: "center" }}>
                <Text>{label}</Text>
            </View>
            <View style={{ textAlign: "center" }}>
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
        imageBox: { border: "1px solid silver", borderRadius: "5px", width: "50px", height: "50px" },
        textBox: { display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'right' },
        plateBox: { display: "flex", fontFamily: "yekan-bold", flexDirection: "row", textAlign: 'right', gap: "2px", marginLeft: 5 },
        bold: { fontFamily: "yekan-bold" },
        link: { color: 'blue', textDecoration: 'underline' },
        px5: { paddingLeft: 2, paddingRight: 2 },
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
        // اضافه کردن اندازه عرض به هر ستون
        column1: {
            width: '7%',
        },
        column2: {
            width: '35%',
        },
        column3: {
            width: '11%',
        },
        column4: {
            width: '11%',
        },
        column5: {
            width: '18%',
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
                        <View style={styles.imageBox}></View>
                        <View style={{ width: "100px", textAlign: "center" }}>
                            <Text style={{ fontFamily: "yekan-bold", fontSize: 15 }}>بسمه تعالی</Text>
                            <Text style={{ fontFamily: "yekan", fontSize: 12 }}>فاکتور خدمات</Text>
                        </View>
                        <View>
                            <View style={{ ...styles.flexBox, gap: "3px" }}>
                                <Text> :تاریخ</Text>
                                <Text>{date}</Text>
                            </View>
                            <View style={{ ...styles.flexBox, gap: "3px" }}>
                                <Text> :شماره</Text>
                                <Text>{number}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.flexBox, marginTop: "20px" }}>
                    <Text style={{ fontFamily: 'yekan-bold', fontSize: "12px" }}>:مشخصات امداد خودرو</Text>
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
                            <LabelValue label=":شماره پلاک" value={plateNumber} />
                            <LabelValue label=":تلفن تماس" value={phoneNumber} />
                            <LabelValue label=":شماره بیمه یدک" value={bimehYadakNumber} />
                        </view>
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
                            <LabelValue label=":شماره پلاک" value={assistancePlateNumber} />
                            <LabelValue label=":تلفن تماس" value={assistancePhoneNumber} />

                        </view>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={[styles.tableCellHeader, styles.column1]}>ردیف</Text>
                        <Text style={[styles.tableCellHeader, styles.column2]}>نوع خدمات</Text>
                        <Text style={[styles.tableCellHeader, styles.column3]}>تعداد</Text>
                        <Text style={[styles.tableCellHeader, styles.column4]}>کیلومتر</Text>
                        <Text style={[styles.tableCellHeader, styles.column5]}>فی</Text>
                        <Text style={[styles.tableCellHeader, styles.column6]}>جمع کل</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.column1]}>1</Text>
                        <Text style={[styles.tableCell, styles.column2]}>حمل خودرو تا تعمیرگاه</Text>
                        <Text style={[styles.tableCell, styles.column3]}>2</Text>
                        <Text style={[styles.tableCell, styles.column4]}>10</Text>
                        <Text style={[styles.tableCell, styles.column5]}>1,200,000</Text>
                        <Text style={[styles.tableCell, styles.column6]}>3,000,000</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row-reverse", gap: "5px", justifyContent: "flex-end" }}>
                    <View style={{ width: "150px", height: "30px", paddingTop: "7px" }}><Text>(10%)مالیات ارزش افزوده</Text></View>
                    <View style={{ width: "99px", height: "30px", border: "1px solid silver", display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}><Text>{tax}</Text></View>
                </View>
                <View style={{ display: "flex", flexDirection: "row-reverse", gap: "5px", justifyContent: "flex-end" }}>
                    <View style={{ width: "99px", height: "30px", paddingTop: "7px" }}><Text>جمع کل</Text></View>
                    <View style={{ width: "99px", height: "30px", border: "1px solid silver", display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}><Text>{total}</Text></View>
                </View>
                <View style={{ marginTop: "20px" }}><Text style={{ textAlign: "right" }}>مبلغ این فاکتور با ارسال کد تایید به شماره تلفن امداد خواه (مشتری) مورد تایید قرار گرفته و از خدمات و پرداخت هزینه رضایت کامل </Text></View>
                <Text style={{ textAlign: "right" }}>
                    .خود را اعلام میدارد
                </Text>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
                    <LabelValueCenter width="720px" label=":شماره شبا" value={shebaNumber} />
                    <LabelValueCenter width="600px" label=":شماره کارت" value={cardNumber} />
                    <LabelValueCenter width="400px" label=":بانک" value={bankName} />
                </View>
            </Page>
        </Document>
    </>

}

export default MyDocument