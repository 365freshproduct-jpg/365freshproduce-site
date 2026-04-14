declare module "nodemailer" {
  const nodemailer: {
    createTransport: (options: {
      host: string;
      port: number;
      secure: boolean;
      auth: {
        user: string;
        pass: string;
      };
    }) => {
      sendMail: (message: {
        from: string;
        to: string;
        replyTo?: string;
        subject: string;
        text: string;
        html: string;
      }) => Promise<unknown>;
    };
  };

  export default nodemailer;
}
