import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service'
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.signUp(createUserDto);
  }

  @Post('signin')
  async signIn(@Body() credentialsDto: CredentialsDto): Promise<{ accessToken: string}>{
    return await this.authService.signIn(credentialsDto)
  }
}