import React, { useState } from 'react';
import axios from "axios";
import { PDFDownloadLink, Page, Text, Document } from '@react-pdf/renderer';

export default function Report() {
  const [reportData, setReportData] = useState([]);

  // function to fetch data from API or database
  async function fetchData() {
    const response = await  axios.get("http://localhost:8070/employee/");
    const data = await response.json();
    setReportData(data);
  }

  return (
    <div>
      <button onClick={fetchData}>Generate Report</button>
      {reportData.length > 0 && (
        <PDFDownloadLink document={<ReportPDF data={reportData} />}>
          {({ blob, url, loading, error }) =>
            loading ? 'Loading report...' : 'Download report'
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}

function ReportPDF({ data }) {
  return (
    <Document>
      <Page>
        <Text>Report</Text>
        {data.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </Page>
    </Document>
  );
}
