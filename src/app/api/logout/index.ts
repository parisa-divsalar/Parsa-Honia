export const logout = async () => {
  localStorage.clear();
  // @ts-ignore
  window.location = `${process.env.NEXT_PUBLIC_BASE_URL}`;
};
