import { numberWithCommas } from "@/helper";
import { useState, useEffect } from "react";

const MyDocument = ({ pdfData }) => {
    const [ReactPDF, setReactPDF] = useState(null);

    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <div>در حال بارگذاری...</div>;

    const { Document, Page, Text, View, StyleSheet, Font } = ReactPDF;

    Font.register({
        family: "Yekan",
        src: "/fonts/vazir/yekan.ttf",
    });
    Font.register({
        family: "Yekan-Bold",
        src: "/fonts/vazir/yekan-bold.ttf",
    });

    const styles = StyleSheet.create({
        page: {
            padding: 20,
            fontSize: 12,
            fontFamily: "Yekan",
            direction: "rtl",
            textAlign: "right",
        },
        table: {
            display: "table",
            width: "100%",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#000",
            marginTop: 10,
        },
        tableRow: {
            flexDirection: "row-reverse",
        },
        tableCellHeader: {
            fontFamily: "Yekan-Bold",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#000",
            padding: 5,
            flex: 1,
            textAlign: "center",
            backgroundColor: "#f2f2f2",
        },
        tableCell: {
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#000",
            padding: 5,
            flex: 1,
            textAlign: "center",
        },

        pageTitle: {

            fontFamily: "Yekan-Bold",
            fontSize: "18px"
        }
    });

    const itemsPerPage = 20; // تعداد سطرهای هر صفحه
    const pages = Math.ceil(pdfData.length / itemsPerPage);

    return (
        <Document>
            {Array.from({ length: pages }).map((_, pageIndex) => {
                const startIndex = pageIndex * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const pageData = pdfData.slice(startIndex, endIndex);
                return (
                    <Page key={pageIndex} size="A4" style={styles.page}>
                        <View style={{
                            display: "block",
                            width: "100%",
                            textAlign: "center",
                        }}>
                            <Text style={styles.pageTitle}>
                                معرفی شدگان توسط شما
                            </Text>
                        </View>

                        <View style={styles.table}>
                            {/* Table Header */}
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCellHeader}>شناسه</Text>
                                <Text style={styles.tableCellHeader}>نام</Text>
                                <Text style={styles.tableCellHeader}>نام خانوادگی</Text>
                                <Text style={styles.tableCellHeader}> (تومان)میزان تعهدات</Text>
                            </View>
                            {/* Table Rows */}
                            {pageData.map((item, index) => (
                                <View style={styles.tableRow} key={index}>
                                    <Text style={styles.tableCell}>{item?.id}</Text>
                                    <Text style={styles.tableCell}>{item?.firstName}</Text>
                                    <Text style={styles.tableCell}>{item?.lastName}</Text>
                                    <Text style={styles.tableCell}>{numberWithCommas(item?.coverageAmount)}</Text>
                                </View>
                            ))}
                        </View>
                    </Page>
                );
            })}
        </Document>
    );
};

export default MyDocument;
