import supabase from "../../supabaseClient.js";

export const getReview = async () => {
  const { data, error } = await supabase.from("review").select();
  if (error) {
    console.log("@@ error", error);
  }
  return data;
};
export const addReview = async (newReview) => {
  const { data, error } = await supabase.from("review").insert(newReview).select();
  if (error) {
    console.log("@@ add ReviewError", error);
  }
  return data;
};
export const updateReview = async (editReview, id) => {
  const { data, error } = await supabase.from("review").update(editReview).eq("id", id);
  if (error) {
    console.log("@@ error", error);
  }
  return data;
};
export const deleteReview = async (id) => {
  await supabase.from("review").delete().eq("id", id);
};

export const getReviewByUserId = async (userId) => {
  const { data, error } = await supabase.from("review").select().eq("user_id", userId);
  if (error) {
    console.log("@@ getReviewByUserIdError ", error);
  }
  return data;
};
