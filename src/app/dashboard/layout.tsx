export default function AuthLayout({
  children,
  users,
  revenue,
  notifications
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;

}>) {
  return (
        <>
        <h1>Parallel rotues</h1>
        {children}
        <div style={{display:"flex"}}>
            <div style={{display:"flex" , flexDirection:"column"}}>
                {users}
                {revenue}
            </div>
            <div style={{display:"flex" , flex:"1"}}>{notifications}</div>
        </div>
        </>


  );
}