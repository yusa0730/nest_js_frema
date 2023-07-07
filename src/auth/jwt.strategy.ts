import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserRepository } from "./user.repository";
import { User } from "src/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    // 親クラスのコンストラクタにオブジェクトを渡す
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // リクエストのどの部分にjwtが記載されているかを設定。今回はAuthorizationヘッダーのBearerトークンを利用するので
      ignoreExpiration: false, //tokenの有効期限切れを考慮するかどうかのフラグ。falseにすると考慮する
      secretOrKey: 'secretKey123',
    })
  }

  // 実際のバリデーションの処理はvalidateメソッドに記載する
  async validate(payload: {id: string, username: string}): Promise<User> {
    const { id, username } = payload;
    const user = await this.userRepository.findOne({ id, username });

    if(!user) {
      throw new UnauthorizedException;
    }

    return user
  }
}