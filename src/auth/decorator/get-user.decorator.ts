import { ExecutionContext, createParamDecorator } from "@nestjs/common";

// createParamDecoratorメソッドはNestJSコモンが提供する関数で、これによりdecoratorを作成することができる
// ExecutionContextはハンドラーに渡されたリクエストを取得したり、実行中のハンドラーが属するコントローラークラスの型を取得したりする、実行中の一連の処理に関する情報を取得するクラス
export const GetUser = createParamDecorator((_, ctx: ExecutionContext) => {
  // このAPIではHTTPを利用しているのでswitchToHttpを利用する
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});