import * as S from "./styles";

export default function Button({
  title,
  backGround,
  icon: Icon,
  iconSize,
  ...rest
}) {
  return (
    <S.Container {...rest} backGround={backGround}>
      {Icon && <Icon size={iconSize} />}
      {title}
    </S.Container>
  );
}
