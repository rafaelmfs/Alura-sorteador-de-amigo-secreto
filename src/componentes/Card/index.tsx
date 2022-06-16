interface CardProps {
  children: JSX.Element;
}

export const Card = ({ children }: CardProps) => {
  return (
    <main className="bg-[#FFF9EB] border-[2px] border-solid box-border rounded-t-[64px] p-20 flex flex-1 -mt-8 justify-center">
      {children}
    </main>
  );
};
