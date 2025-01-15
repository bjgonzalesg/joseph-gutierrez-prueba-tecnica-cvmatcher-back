import { envs } from '@/core/config';
import { Injectable, Logger } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { ISendEmailProps } from './interfaces';

@Injectable()
export class NodemailerService {
  private logger = new Logger();

  private transporter = createTransport({
    service: envs.nmService,
    auth: {
      user: envs.nmUser,
      pass: envs.nmPassword,
    },
  });

  constructor() {
    this.transporter.verify((error: Error | null) => {
      if (error) {
        this.logger.error(error);
      } else {
        this.logger.log('Server is ready to take our messages', 'Nodemailer');
      }
    });
  }

  async sendMail({ to, subject, text, html }: ISendEmailProps) {
    try {
      await this.transporter.sendMail({
        from: `UNT - <${envs.nmUser}>`,
        to,
        subject,
        text,
        html,
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
