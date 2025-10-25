import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`profile_image_id\` integer,
  	\`university_id\` text NOT NULL,
  	\`last_name\` text NOT NULL,
  	\`first_name\` text NOT NULL,
  	\`display_name\` text NOT NULL,
  	\`nickname\` text NOT NULL,
  	\`cohort_id\` integer,
  	\`comment\` text,
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
  	FOREIGN KEY (\`profile_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cohort_id\`) REFERENCES \`cohorts\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_users\`("id", "profile_image_id", "university_id", "last_name", "first_name", "display_name", "nickname", "cohort_id", "comment", "address", "phone_number", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until") SELECT "id", "profile_image_id", "university_id", "last_name", "first_name", "display_name", "nickname", "cohort_id", "comment", "address", "phone_number", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until" FROM \`users\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`ALTER TABLE \`__new_users\` RENAME TO \`users\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`users_profile_image_idx\` ON \`users\` (\`profile_image_id\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_university_id_idx\` ON \`users\` (\`university_id\`);`)
  await db.run(sql`CREATE INDEX \`users_cohort_idx\` ON \`users\` (\`cohort_id\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`profile_image_id\` integer,
  	\`university_id\` text,
  	\`last_name\` text NOT NULL,
  	\`first_name\` text NOT NULL,
  	\`display_name\` text NOT NULL,
  	\`nickname\` text NOT NULL,
  	\`cohort_id\` integer,
  	\`comment\` text,
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
  	FOREIGN KEY (\`profile_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cohort_id\`) REFERENCES \`cohorts\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_users\`("id", "profile_image_id", "university_id", "last_name", "first_name", "display_name", "nickname", "cohort_id", "comment", "address", "phone_number", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until") SELECT "id", "profile_image_id", "university_id", "last_name", "first_name", "display_name", "nickname", "cohort_id", "comment", "address", "phone_number", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until" FROM \`users\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`ALTER TABLE \`__new_users\` RENAME TO \`users\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`users_profile_image_idx\` ON \`users\` (\`profile_image_id\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_university_id_idx\` ON \`users\` (\`university_id\`);`)
  await db.run(sql`CREATE INDEX \`users_cohort_idx\` ON \`users\` (\`cohort_id\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
}
