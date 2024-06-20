import supabase from "../../supabaseClient.js";

export const getReview = async () => {
  const {data, error} = await supabase.from('review').select(`
      *,
      users!inner(nickname)
    `);
  if(error) {
    console.log('@@ error', error)
  }
  return data;
}
export const addReview = async (newReview) => {
  const {data,error} = await supabase.from('review').insert(newReview).select()
  if (error) {
    console.log('@@ add ReviewError', error)
  }
  return data;
}
export const updateReview = async (editReview,id) => {
  const {data, error} = await supabase.from('review').update(editReview).eq('id',id)
  if(error) {
    console.log('@@ error', error)
  }
  return data;
}
export const deleteReview = async (id) => {
  await supabase.from('review').delete().eq('id',id)
}