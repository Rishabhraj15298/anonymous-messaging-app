import {z} from 'zod';

export const messageSchema = z.object({
    content : z.string()
               .min(10 ,'Content must contain at least 10 characters ')
               .max(300 ,'Content must not contain more than 300 character ')
})