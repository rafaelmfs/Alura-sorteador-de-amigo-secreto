export const Header = () => {
  return (
    <header className="flex flex-col pt-16 items-center justify-between medium:pt-[120px] medium:justify-around medium:flex-row">
      <div
        className="bg-small-logo w-[235px] h-[199px] medium:bg-logo medium:w-[351px] medium:h-[117px]"
        role="img"
        aria-label="logo do Sorteador"
      ></div>
      <img className="z-10" src="imagens/participante.png" alt="Participante com um presente na mão" />
    </header>
  );
};
