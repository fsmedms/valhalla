import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`users_blocks_project_membership_block\` ADD \`project_id\` integer NOT NULL REFERENCES projects(id);`)
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_project_idx\` ON \`users_blocks_project_membership_block\` (\`project_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_users_blocks_project_membership_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`start_date\` text DEFAULT '2025-10-25' NOT NULL,
  	\`end_date\` text,
  	\`status_control\` text DEFAULT 'automatic' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_users_blocks_project_membership_block\`("_order", "_parent_id", "_path", "id", "start_date", "end_date", "status_control", "block_name") SELECT "_order", "_parent_id", "_path", "id", "start_date", "end_date", "status_control", "block_name" FROM \`users_blocks_project_membership_block\`;`)
  await db.run(sql`DROP TABLE \`users_blocks_project_membership_block\`;`)
  await db.run(sql`ALTER TABLE \`__new_users_blocks_project_membership_block\` RENAME TO \`users_blocks_project_membership_block\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_order_idx\` ON \`users_blocks_project_membership_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_parent_id_idx\` ON \`users_blocks_project_membership_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_path_idx\` ON \`users_blocks_project_membership_block\` (\`_path\`);`)
}
