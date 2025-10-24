import VerificationEmail from "@/email/VerificationEmail";
import { resend } from "../lib/resend";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificaitonEmail (
    email : string,
    username : string , 
    verifyCode : string,

):Promise<ApiResponse>{

    try {
        await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Anonymous Messaging App | Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: 'Verification email sent successfully.' };
    } catch (error) {
        console.error("Error occured while sending verification email", error)
        return {
            success : false,
            message : 'Error occured while sending verification email',
        }
        
    }
}