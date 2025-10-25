import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`cohorts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`cohorts_updated_at_idx\` ON \`cohorts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`cohorts_created_at_idx\` ON \`cohorts\` (\`created_at\`);`)
  await db.run(sql`ALTER TABLE \`users_blocks_fsr_membership_block\` ADD \`comment\` text;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`cohort_id\` integer REFERENCES cohorts(id);`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`comment\` text;`)
  await db.run(sql`CREATE INDEX \`users_cohort_idx\` ON \`users\` (\`cohort_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`cohorts_id\` integer REFERENCES cohorts(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_cohorts_id_idx\` ON \`payload_locked_documents_rels\` (\`cohorts_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`cohorts\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`profile_image_id\` integer,
  	\`university_id\` text,
  	\`last_name\` text NOT NULL,
  	\`first_name\` text NOT NULL,
  	\`display_name\` text NOT NULL,
  	\`nickname\` text NOT NULL,
  	\`address\` text,
  	\`phone_number\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text,
  	FOREIGN KEY (\`profile_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_users\`("id", "profile_image_id", "university_id", "last_name", "first_name", "display_name", "nickname", "address", "phone_number", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until") SELECT "id", "profile_image_id", "university_id", "last_name", "first_name", "display_name", "nickname", "address", "phone_number", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until" FROM \`users\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`ALTER TABLE \`__new_users\` RENAME TO \`users\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`users_profile_image_idx\` ON \`users\` (\`profile_image_id\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_university_id_idx\` ON \`users\` (\`university_id\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`fsr_positions_id\` integer,
  	\`fsr_departments_id\` integer,
  	\`special_positions_id\` integer,
  	\`ho_positions_id\` integer,
  	\`projects_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`fsr_positions_id\`) REFERENCES \`fsr_positions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`fsr_departments_id\`) REFERENCES \`fsr_departments\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`special_positions_id\`) REFERENCES \`special_positions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`ho_positions_id\`) REFERENCES \`ho_positions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id", "fsr_positions_id", "fsr_departments_id", "special_positions_id", "ho_positions_id", "projects_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id", "fsr_positions_id", "fsr_departments_id", "special_positions_id", "ho_positions_id", "projects_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_fsr_positions_id_idx\` ON \`payload_locked_documents_rels\` (\`fsr_positions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_fsr_departments_id_idx\` ON \`payload_locked_documents_rels\` (\`fsr_departments_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_special_positions_id_idx\` ON \`payload_locked_documents_rels\` (\`special_positions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_ho_positions_id_idx\` ON \`payload_locked_documents_rels\` (\`ho_positions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_projects_id_idx\` ON \`payload_locked_documents_rels\` (\`projects_id\`);`)
  await db.run(sql`ALTER TABLE \`users_blocks_fsr_membership_block\` DROP COLUMN \`comment\`;`)
}
