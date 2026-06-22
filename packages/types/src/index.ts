import { z } from "zod";

// DTO for triggering an analysis job
export const CreateAnalysisSchema = z.object({
  droneId: z.string().min(1, "Drone ID is required"),
  imageKeys: z.array(z.string()).min(1, "At least one image key is required"),
});

export type CreateAnalysisDto = z.infer<typeof CreateAnalysisSchema>;

// Standard API Response structure
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional(),
});

export type ApiResponse<T = any> = z.infer<typeof ApiResponseSchema> & { data?: T };
