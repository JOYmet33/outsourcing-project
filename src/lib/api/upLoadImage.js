import supabase from "../../supabaseClient.js";

export const uploadImage = async (file) => {
  const fileExt = file.name.split(".").pop();
  const filePath = `${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage.from("camparoo").upload(filePath, file);

  if (error) {
    console.error(error);
    return null;
  }

  return data.path;
};
