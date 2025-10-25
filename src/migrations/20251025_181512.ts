import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_blocks_fsr_membership_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`position_id\` integer NOT NULL,
  	\`start_date\` text DEFAULT '2025-10-25' NOT NULL,
  	\`end_date\` text,
  	\`status_control\` text DEFAULT 'automatic' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`position_id\`) REFERENCES \`fsr_positions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_blocks_fsr_membership_block_order_idx\` ON \`users_blocks_fsr_membership_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_fsr_membership_block_parent_id_idx\` ON \`users_blocks_fsr_membership_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_fsr_membership_block_path_idx\` ON \`users_blocks_fsr_membership_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_fsr_membership_block_position_idx\` ON \`users_blocks_fsr_membership_block\` (\`position_id\`);`)
  await db.run(sql`CREATE TABLE \`users_blocks_fsv_membership_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`position\` text,
  	\`start_date\` text DEFAULT '2025-10-25' NOT NULL,
  	\`end_date\` text,
  	\`status_control\` text DEFAULT 'automatic' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_blocks_fsv_membership_block_order_idx\` ON \`users_blocks_fsv_membership_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_fsv_membership_block_parent_id_idx\` ON \`users_blocks_fsv_membership_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_fsv_membership_block_path_idx\` ON \`users_blocks_fsv_membership_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`users_blocks_special_agent_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`position_id\` integer NOT NULL,
  	\`start_date\` text DEFAULT '2025-10-25' NOT NULL,
  	\`end_date\` text,
  	\`status_control\` text DEFAULT 'automatic' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`position_id\`) REFERENCES \`special_positions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_blocks_special_agent_block_order_idx\` ON \`users_blocks_special_agent_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_special_agent_block_parent_id_idx\` ON \`users_blocks_special_agent_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_special_agent_block_path_idx\` ON \`users_blocks_special_agent_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_special_agent_block_position_idx\` ON \`users_blocks_special_agent_block\` (\`position_id\`);`)
  await db.run(sql`CREATE TABLE \`users_blocks_ho_politician_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`positions_id\` integer NOT NULL,
  	\`start_date\` text DEFAULT '2025-10-25' NOT NULL,
  	\`end_date\` text,
  	\`status_control\` text DEFAULT 'automatic' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`positions_id\`) REFERENCES \`ho_positions\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_blocks_ho_politician_block_order_idx\` ON \`users_blocks_ho_politician_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_ho_politician_block_parent_id_idx\` ON \`users_blocks_ho_politician_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_ho_politician_block_path_idx\` ON \`users_blocks_ho_politician_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_ho_politician_block_positions_idx\` ON \`users_blocks_ho_politician_block\` (\`positions_id\`);`)
  await db.run(sql`CREATE TABLE \`users_blocks_project_membership_block\` (
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
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_order_idx\` ON \`users_blocks_project_membership_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_parent_id_idx\` ON \`users_blocks_project_membership_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_blocks_project_membership_block_path_idx\` ON \`users_blocks_project_membership_block\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`fsr_positions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`department_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`department_id\`) REFERENCES \`fsr_departments\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`fsr_positions_department_idx\` ON \`fsr_positions\` (\`department_id\`);`)
  await db.run(sql`CREATE INDEX \`fsr_positions_updated_at_idx\` ON \`fsr_positions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`fsr_positions_created_at_idx\` ON \`fsr_positions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`fsr_departments\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`fsr_departments_updated_at_idx\` ON \`fsr_departments\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`fsr_departments_created_at_idx\` ON \`fsr_departments\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`special_positions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`special_positions_updated_at_idx\` ON \`special_positions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`special_positions_created_at_idx\` ON \`special_positions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`ho_positions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`ho_positions_updated_at_idx\` ON \`ho_positions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`ho_positions_created_at_idx\` ON \`ho_positions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`projects\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_updated_at_idx\` ON \`projects\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`projects_created_at_idx\` ON \`projects\` (\`created_at\`);`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`university_id\` text;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`last_name\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`first_name\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`display_name\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`nickname\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`address\` text;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`phone_number\` text;`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_university_id_idx\` ON \`users\` (\`university_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`fsr_positions_id\` integer REFERENCES fsr_positions(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`fsr_departments_id\` integer REFERENCES fsr_departments(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`special_positions_id\` integer REFERENCES special_positions(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`ho_positions_id\` integer REFERENCES ho_positions(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`projects_id\` integer REFERENCES projects(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_fsr_positions_id_idx\` ON \`payload_locked_documents_rels\` (\`fsr_positions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_fsr_departments_id_idx\` ON \`payload_locked_documents_rels\` (\`fsr_departments_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_special_positions_id_idx\` ON \`payload_locked_documents_rels\` (\`special_positions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_ho_positions_id_idx\` ON \`payload_locked_documents_rels\` (\`ho_positions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_projects_id_idx\` ON \`payload_locked_documents_rels\` (\`projects_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_blocks_fsr_membership_block\`;`)
  await db.run(sql`DROP TABLE \`users_blocks_fsv_membership_block\`;`)
  await db.run(sql`DROP TABLE \`users_blocks_special_agent_block\`;`)
  await db.run(sql`DROP TABLE \`users_blocks_ho_politician_block\`;`)
  await db.run(sql`DROP TABLE \`users_blocks_project_membership_block\`;`)
  await db.run(sql`DROP TABLE \`fsr_positions\`;`)
  await db.run(sql`DROP TABLE \`fsr_departments\`;`)
  await db.run(sql`DROP TABLE \`special_positions\`;`)
  await db.run(sql`DROP TABLE \`ho_positions\`;`)
  await db.run(sql`DROP TABLE \`projects\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`DROP INDEX \`users_university_id_idx\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`university_id\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`last_name\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`first_name\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`display_name\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`nickname\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`address\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`phone_number\`;`)
}
