# Supabase Setup Guide for HimCabs

Follow these steps to configure your Supabase project for the HimCabs backend.

## 1. Create a Supabase Account & Project
1. Go to [Supabase](https://supabase.com/) and sign up / log in.
2. Click **"New Project"**.
3. Select your Organization.
4. Enter a **Name** (e.g., `himcabs-dev`).
5. Set a strong **Database Password** (Save this! You will need it for the connection string).
6. Choose a **Region** close to your users (e.g., `Mumbai`).
7. Click **"Create new project"**.

## 2. Get API Credentials
Once your project is ready (it may take a few minutes):
1. Go to **Project Settings** (gear icon at the bottom of the left sidebar).
2. Click on **"API"**.
3. Copy the **Project URL**.
   - This goes into `SUPABASE_URL` in your `.env` file.
4. Copy the **anon** / **public** key.
   - This goes into `SUPABASE_KEY` in your `.env` file.

## 3. Get Database Connection String
1. In **Project Settings**, go to **"Database"**.
2. Under **Connection string**, make sure **"Transaction Mode"** (port 6543) or **"Session Mode"** (port 5432) is selected.
   - *Note: For NestJS TypeORM, "Session Mode" (port 5432) is usually preferred unless you are in a serverless environment.*
3. Copy the URI. It looks like:
   `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`
4. Replace `[YOUR-PASSWORD]` with the password you set in Step 1.
5. This goes into `DATABASE_URL` in your `.env` file.

## 4. Get JWT Secret
1. In **Project Settings**, go to **"API"**.
2. Scroll down to **JWT Settings**.
3. Copy the **JWT Secret**.
   - This goes into `JWT_SECRET` in your `.env` file.

## 5. Enable Phone Authentication (OTP)
Since HimCabs uses phone login:
1. Go to **Authentication** (icon in the left sidebar) -> **Providers**.
2. Click on **"Phone"**.
3. Toggle **"Enable Phone Provider"** to ON.
4. Select "SMS Provider" (e.g., Twilio, MessageBird) or leave it as default for testing provided you use the default testing credentials if available/configured.
   - *Tip: For purely local development/testing without spending money, you can just use the generic "Phone" provider and add "Phone Numbers" in the Auth -> Users section if Supabase allows adding test numbers.* 
   - *Actually, Supabase allows setting static **"Phone Numbers"** for testing in the "Phone" provider settings. Scroll down to "Phone numbers for testing" and add a number (e.g., `+919999999999`) and a fixed OTP (e.g., `1234`).*

## 6. Update Your `.env` File
Create a `.env` file in the root of your project (copy from `.env.example`) and fill in the values:

```env
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_KEY="your-anon-key-here"
DATABASE_URL="postgresql://postgres:your-password@db.your-project-ref.supabase.co:5432/postgres"
JWT_SECRET="your-jwt-secret-here"
```

You are now ready to run the backend!
