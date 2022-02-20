import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitialCreation1645383591681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'NAME',
            type: 'varchar',
          },
          {
            name: 'EMAIL',
            type: 'varchar',
          },
          {
            name: 'CREATED_AT',
            type: 'DATETIME',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
