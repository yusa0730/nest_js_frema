import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/entities/user.entity';
import { CredentialsDto } from './dto/credentials.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }

  async signIn(credentialsDto: CredentialsDto): Promise<{ accessToken: string }> {
    const { username, password } = credentialsDto;
    const user = await this.userRepository.findOne({ username });
    // ユーザーのデータが存在しており、リクエストで来たパスワードとDBに保存されているハッシュ化されたパスワードを比較して合っていれば
    // payloadにユーザーの情報を設定してjwtのアクセストークンを発行する
    if(user && (await bcrypt.compare(password, user.password))) {
      const payload = {
        id: user.id,
        username: user.username,
      }
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    }

    throw new UnauthorizedException(
      'ユーザー名またはパスワードを確認してください',
    );
  }
}
