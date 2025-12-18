type AuthPanelContentProps = {
  title: string;
  subtitle: string;
};

function AuthPanelContent({ title, subtitle }: AuthPanelContentProps) {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-sm opacity-90">{subtitle}</p>
    </div>
  );
}

export default AuthPanelContent;
