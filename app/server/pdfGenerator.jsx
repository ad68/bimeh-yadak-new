// server/pdfGenerator.js
import { Document, Page, Text, StyleSheet, Font } from "@react-pdf/renderer";
Font.register({
  family: "vazir",
  src: "/fonts/vazir/vazir.ttf",
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    fontFamily: "vazir"
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 50,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>{data.title}</Text>
      <Text style={styles.text}>{data.content}</Text>
    </Page>
  </Document>
);

export default MyDocument;
