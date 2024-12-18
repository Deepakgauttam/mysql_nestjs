import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async handleWebhook(@Body() payload: any): Promise<any> {
    console.log('Webhook received:', payload);

    // Example: Create a user from webhook data
    if (payload.event === 'user.created') {
      await this.userService.create({
        email: payload.data.email,
        name: payload.data.name,
        number:payload.data.number
      });
    }
    return { status: 'processed' };
  }
}



// import { Controller, Post, Body, Headers } from '@nestjs/common';

// @Controller('webhooks')
// export class WebhookController {
//   @Post()
//   async handleWebhook(
//     @Body() payload: any,
//     @Headers() headers: any,
//   ): Promise<any> {
//     console.log('Received Webhook Payload:', payload);
//     console.log('Received Headers:', headers);

//     // Process the webhook payload here
//     return { status: 'success' };
//   }
// }
