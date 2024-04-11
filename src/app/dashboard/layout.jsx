export default function DashboardLayout({ children, team, analytics }) {
  return (
    <>
      <div>{children}</div>
      <div>{team}</div>
      <div>{analytics}</div>
    </>
  );
}
