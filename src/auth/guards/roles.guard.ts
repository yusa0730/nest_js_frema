import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
// Guardとして機能させるためにはCanActivateを実装する必要がある
export class RolesGuard implements CanActivate {
  // Reflectorはdecoratorでセットしたメタデータを取得するためのもの
  constructor(private reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const requiredStatuses = this.reflector.get<string[]>(
      'statuses',
      ctx.getHandler(),
    );

    // decoratorに何も指定されていない場合は実行を許可する
    if(!requiredStatuses) {
      return true;
    }

    const { user } = ctx.switchToHttp().getRequest();

    // ユーザーのステータスがメタデータから取得したステータスのいずれかに一致すれば実行を許可する
    return requiredStatuses.some((status) => user.status.includes(status));
  }
}