export const NoWrap = ({ children }: { children: React.ReactNode }) => (
  <span style={{ whiteSpace: "nowrap" }}>
    {children}
    <wbr />
  </span>
);
