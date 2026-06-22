import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bullmq";
import { DroneJobProducer } from "./drone-job.producer";
import { PdfReportProcessor } from "./pdf-report.processor";

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || "localhost",
        port: parseInt(process.env.REDIS_PORT || "6379", 10),
      },
    }),
    BullModule.registerQueue({
      name: "drone-analysis",
    }),
    BullModule.registerQueue({
      name: "pdf-reports",
    }),
  ],
  providers: [DroneJobProducer, PdfReportProcessor],
  exports: [DroneJobProducer],
})
export class QueuesModule {}
