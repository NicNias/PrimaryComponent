import * as S from "./styles";

export default function Button({ title, backGround, ...rest }) {
  return (
    <S.Container {...rest} backGround={backGround}>
      {title}
    </S.Container>
  );
}
