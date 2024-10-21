import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePointsItemsRelation1729545354272
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "points_items",
        columns: [
          {
            name: "point_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "item_id",
            type: "uuid",
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["point_id"],
            referencedTableName: "points",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["item_id"],
            referencedTableName: "items",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("points_items");
  }
}
