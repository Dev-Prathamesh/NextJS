import { z } from "zod"

export const messageSchema = z.object({
    content: z.string()
        .min(10, "Message must be at least 8 characters")
        .max(200, "Message must be no more than 20 characters")
})