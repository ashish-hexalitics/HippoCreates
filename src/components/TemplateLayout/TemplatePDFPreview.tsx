import  { useEffect, useState } from "react";
import { Page, Image, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import html2canvas from "html2canvas";

const PdfDocument = ({ imageSrc }:any) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {imageSrc && <Image style={styles.image} src={imageSrc} />}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  image: {
    width: "100%",
    height: "auto",
  },
});

const TemplatePDFPreview = ({ templateContent }:any) => {
  const [imageSrc, setImageSrc] = useState<any>(null);

  useEffect(() => {
    const convertHtmlToImage = async () => {
      const element = document.createElement('div');
      element.innerHTML = templateContent;
      document.body.appendChild(element);
      
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      
      setImageSrc(imgData);
      
      document.body.removeChild(element);
    };

    convertHtmlToImage();
  }, [templateContent]);

  return (
    <PDFViewer width="100%" height="600px">
      <PdfDocument imageSrc={imageSrc} />
    </PDFViewer>
  );
};

export default TemplatePDFPreview;
