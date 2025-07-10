const nodemailer = require("nodemailer");

module.exports = async (
  email,
  subject,
  url,
  content
) => {
  try {
    const transporter =
      nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.SECURE,

        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });
    // InstaGlow AI styled email template
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', Arial, Helvetica, sans-serif;
            background: linear-gradient(115.43deg, #9859E9 18.37%, #CB4FB8 41.76%, #DE54AB 57.93%, #CF64C1 76.86%, #AD85F1 100%);
            min-height: 100vh;
            color: #181830;
          }
          .container {
            width: 100%;
            max-width: 520px;
            margin: 40px auto;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 0 25px #E2DFE7;
            overflow: hidden;
            padding: 0 0 32px 0;
          }
          .header {
            background: linear-gradient(90deg, #E354AD 0%, #A742F1 100%);
            padding: 32px 0 16px 0;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .header img {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            box-shadow: 0 4px 16px #E354AD33;
            margin-bottom: 8px;
          }
          .brand {
            font-size: 1.7rem;
            font-weight: 800;
            background: linear-gradient(90deg, #E354AD 0%, #A742F1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom: 0.5rem;
          }
          .content {
            padding: 32px 32px 0 32px;
            text-align: center;
          }
          .content h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #A742F1;
            margin-bottom: 18px;
          }
          .content p {
            font-size: 1rem;
            color: #707070;
            margin-bottom: 18px;
          }
          .button {
            display: inline-block;
            padding: 14px 32px;
            background: linear-gradient(90deg, #E354AD 0%, #A742F1 100%);
            color: #fff;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            margin: 24px 0 0 0;
            box-shadow: 0 2px 8px #E354AD33;
            transition: opacity 0.2s;
          }
          .button:hover {
            opacity: 0.92;
          }
          .footer {
            margin-top: 32px;
            padding: 18px 0 0 0;
            text-align: center;
            font-size: 0.95rem;
            color: #A792E3;
            border-top: 1px solid #EDE6F7;
          }
          .footer a {
            color: #A742F1;
            text-decoration: none;
            font-weight: 600;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://your-domain.com/landing_page/Frame_43.png" alt="InstaGlow AI Logo" />
            <div class="brand">InstaGlow AI</div>
          </div>
          <div class="content">
            <h1>${subject}</h1>
            ${content}
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} InstaGlow AI. Made with love for creators everywhere.</p>
            <p><a href="https://your-domain.com">Visit InstaGlow AI</a></p>
          </div>
        </div>
      </body>
      </html>
    `;
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: url,
      html: emailTemplate,
    });
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
