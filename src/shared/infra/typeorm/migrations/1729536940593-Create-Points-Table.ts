import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePointsTable1729536940593 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "points",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "whatsapp",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "uf",
            type: "char",
            length: "2",
          },
          {
            name: "latitude",
            type: "decimal",
            precision: 9,
            scale: 6,
          },
          {
            name: "longitude",
            type: "decimal",
            precision: 9,
            scale: 6,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("points");
  }
}
