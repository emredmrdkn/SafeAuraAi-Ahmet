import { Injectable } from "@nestjs/common";
import { Queue } from "bullmq";
import { InjectQueue } from "@nestjs/bullmq";

@Injectable()
export class DroneJobProducer {
  constructor(@InjectQueue("drone-analysis") private readonly droneQueue: Queue) {}

  async addDroneAnalysisJob(droneId: string, imageKeys: string[]) {
    await this.droneQueue.add("analyze-images", { droneId, imageKeys });
    return { status: "Job added to queue" };
  }
}
