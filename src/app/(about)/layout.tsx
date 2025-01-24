
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div>{"Baifern"}</div>
        {children}
    </div>
        
  );
}
