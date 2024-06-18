import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://skoeoscfrrvppqbusqpk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2Vvc2NmcnJ2cHBxYnVzcXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjMyNzMsImV4cCI6MjAzNDE5OTI3M30.fBumNd0Je3S-dTIYdSB3vBNbKCH7Lq2rbuw3hK7w7Ek",
);
