const nodemailer=require('nodemailer');
class sendmaileController
{
    static sendMAIL=async(req,res)=>{
        const {to,subject}=req.body;

        let transporter = nodemailer.createTransport({
         host:`smtp.gmail.com`,
         port:465,
         auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    });
    let mailOptions = {
        from: process.env.USER_EMAIL,
        to: to,
        subject: subject,
        text: 'Hi I am Damodar!',
        attachments:[
            {
                filename:'kshitiz.jpg',
                path:'kshitiz.jpg'
            }
        ]
    };
    
   const successEmail=await transporter.sendMail(mailOptions);
   if(successEmail){
    return res.status(200).json({
        message:"Email sent successfully!",
        mail:successEmail
    })
   }
   
   return res.status(402).json({
    message:"Something went wrong!!"
   })
  }
}

module.exports=sendmaileController