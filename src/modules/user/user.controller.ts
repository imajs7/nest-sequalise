import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/preference')
  async fetchAllPreference(@Res() response) {
    const preference = await this.userService.findAllPreferences();
    return response.status(HttpStatus.OK).json({
      preference,
    });
  }

  @Post('/preference')
  async createPreference(@Res() response) {
    const preference = await this.userService.createPreference();
    return response.status(HttpStatus.OK).json({
      preference,
    });
  }
}
