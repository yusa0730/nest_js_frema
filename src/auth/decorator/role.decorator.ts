import { SetMetadata } from "@nestjs/common";

// ロールデコレーターの役割は認可が必要なロールを受け取り、メタデータに登録すること
export const Role = (...statuses: string[]) =>
  // SetMetadataを利用することでデコレーターに渡された値をKEY,VALUEの形式でメタデータとして登録できる
  // カスタムメタデータをエンドポイントやルートに追加するためのもの。このメタデータは、後でGuardやInterceptorといった機能で参照して、動的な処理を実行するのに使うことができる。
  SetMetadata('statuses', statuses);