import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import * as puppeteer from "puppeteer";
import { Injectable } from "@nestjs/common";

@Injectable()
@Processor("pdf-reports")
export class PdfReportProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    const { reportId, data } = job.data;
    console.log(`Processing PDF report for job ${job.id}, report: ${reportId}`);

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #333; }
            .content { margin-top: 20px; }
          </style>
        </head>
        <body>
          <h1>SafeAura AI - Inspection Report</h1>
          <div class="content">
            <p>Report ID: ${reportId}</p>
            <p>Generated Data: ${JSON.stringify(data)}</p>
          </div>
        </body>
      </html>
    `;

    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });
    
    await browser.close();

    console.log(`PDF generated for report ${reportId}`);
    return { success: true, pdfSize: pdfBuffer.length };
  }
}
