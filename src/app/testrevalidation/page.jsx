export const revalidate = 0;

const revalidationPage = () => {
  return <div>test {new Date().getTime()}</div>;
};

export default revalidationPage;
