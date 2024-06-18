// 회원가입

import { supabase } from "../../supabaseClient";

const { data, error } = await supabase.auth.signUp({
  email: "example@email.com",
  password: "example-password",
});
