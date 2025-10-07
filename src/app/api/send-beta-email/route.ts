import { NextRequest, NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { userEmail, to, subject, message } = await request.json()

    // TODO: Configure email environment variables in Vercel
    // Create transporter using environment variables
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST || 'smtp.gmail.com',
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })

    // Email content
    // const mailOptions = {
    //   from: process.env.SMTP_USER,
    //   to: to,
    //   subject: subject,
    //   text: message,
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #4ecdc4;">New BioTap Beta User Signup</h2>
    //       <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    //         <p><strong>User Email:</strong> ${userEmail}</p>
    //         <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
    //         <p><strong>Status:</strong> Pending Beta Access</p>
    //       </div>
    //       <p>This user has successfully joined the BioTap beta program and should be added to the beta user list.</p>
    //       <p>Please follow up with them regarding beta access and next steps.</p>
    //       <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
    //       <p style="color: #666; font-size: 12px;">
    //         This email was sent automatically from the BioTap landing page beta signup form.
    //       </p>
    //     </div>
    //   `,
    // }

    // Send email
    // await transporter.sendMail(mailOptions)
    console.log('Beta signup:', { userEmail, to, subject, message })

    return NextResponse.json({ 
      success: true, 
      message: 'Beta signup recorded successfully' 
    })

  } catch (error) {
    console.error('Error processing beta signup:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process beta signup' 
      },
      { status: 500 }
    )
  }
}
