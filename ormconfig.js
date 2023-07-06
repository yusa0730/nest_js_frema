module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
}
// マイグレーションファイルを作成する際に、どのエンティティーの情報を読み込むかの設定です。distフォルダにあるコンパイル済みのjsファイルを読み込む
// entities: ['dist/entities/*.entity.js'],

// どのマイグレーションファイルを利用して、マイグレーションを行うかの設定
// migrations: ['dist/migrations/*.js'],

// CLIによってエンティティーやマイグレーションファイルが作成される場合の出力先となる