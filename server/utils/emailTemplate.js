export const createEmailTemplate = (formData, submissionInfo) => {
  const { fullName, email, phone, service, message } = formData;
  const { timestamp, ip } = submissionInfo;

  return {
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background-color: #f8fafc;
          }
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background: white; 
            border-radius: 12px; 
            overflow: hidden; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #3b82f6, #8b5cf6); 
            color: white; 
            padding: 30px 20px; 
            text-align: center;
          }
          .header h1 { 
            font-size: 24px; 
            font-weight: 700; 
            margin-bottom: 8px;
          }
          .header p { 
            font-size: 16px; 
            opacity: 0.9;
          }
          .content { 
            padding: 30px 20px;
          }
          .field { 
            margin-bottom: 20px; 
            border-bottom: 1px solid #e5e7eb; 
            padding-bottom: 20px;
          }
          .field:last-of-type { 
            border-bottom: none; 
            margin-bottom: 0;
          }
          .label { 
            font-weight: 600; 
            color: #374151; 
            font-size: 14px; 
            text-transform: uppercase; 
            letter-spacing: 0.5px; 
            margin-bottom: 8px;
          }
          .value { 
            font-size: 16px; 
            color: #1f2937; 
            padding: 12px 16px; 
            background: #f9fafb; 
            border-radius: 8px; 
            border-left: 4px solid #3b82f6;
          }
          .value a { 
            color: #3b82f6; 
            text-decoration: none;
          }
          .value a:hover { 
            text-decoration: underline;
          }
          .message-value { 
            white-space: pre-wrap; 
            word-wrap: break-word;
          }
          .footer { 
            background: #f9fafb; 
            padding: 20px; 
            border-top: 1px solid #e5e7eb; 
            font-size: 12px; 
            color: #6b7280; 
            text-align: center;
          }
          .footer p { 
            margin-bottom: 4px;
          }
          .priority-badge {
            display: inline-block;
            background: #ef4444;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          @media (max-width: 600px) {
            .container { margin: 10px; }
            .content { padding: 20px 15px; }
            .header { padding: 20px 15px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p>Digitiq Technologies Website</p>
            <div style="margin-top: 10px;">
              <span class="priority-badge">New Lead</span>
            </div>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Full Name</div>
              <div class="value">${fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value">
                <a href="mailto:${email}" style="font-weight: 600;">${email}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone Number</div>
              <div class="value">
                <a href="tel:${phone}" style="font-weight: 600;">${phone}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">🎯 Service of Interest</div>
              <div class="value" style="font-weight: 600; color: #3b82f6;">${service}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value message-value">${message}</div>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>📅 Submitted:</strong> ${timestamp}</p>
            <p><strong>🌐 IP Address:</strong> ${ip}</p>
            <p><strong>📍 Source:</strong> Digitiq Technologies Contact Form</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="font-style: italic;">This is an automated message from your website contact form.</p>
            <p style="margin-top: 8px;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours for best results.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
🚀 NEW CONTACT FORM SUBMISSION - DIGITIQ TECHNOLOGIES

👤 CONTACT DETAILS:
Name: ${fullName}
Email: ${email}
Phone: ${phone}

🎯 SERVICE INTEREST:
${service}

💬 MESSAGE:
${message}

📊 SUBMISSION INFO:
Submitted: ${timestamp}
IP Address: ${ip}
Source: Website Contact Form

---
This is an automated message from your website contact form.
Please respond to this inquiry within 24 hours for best results.
    `
  };
};