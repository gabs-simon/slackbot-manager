CREATE TABLE IF NOT EXISTS "slackbot-manager_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"createdById" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "slackbot-manager_post" ADD CONSTRAINT "slackbot-manager_post_createdById_slackbot-manager_user_id_fk" FOREIGN KEY ("createdById") REFERENCES "public"."slackbot-manager_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "createdById_idx" ON "slackbot-manager_post" ("createdById");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "slackbot-manager_post" ("name");