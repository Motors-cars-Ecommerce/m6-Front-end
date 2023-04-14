import { ArticleStyled, OwnerCommentDiv, ContainerCommet } from "./styles";

const CardComment = () => {
  return (
    <ArticleStyled>
      <h2>Comentários</h2>

      {/* essa div marca o inicio e o fim do comentario de algum usuario, entao pode ser componentizado e deve ser! */}
      <ContainerCommet>
        <OwnerCommentDiv>
          <div>
            <strong>JL</strong>
          </div>
          <strong>Júlia Lima</strong>
          <span>há 3 dias</span>
        </OwnerCommentDiv>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ContainerCommet>

      <ContainerCommet>
        <OwnerCommentDiv>
          <div>
            <strong>MA</strong>
          </div>
          <strong>Marcos Antônio</strong>
          <span>há 7 dias</span>
        </OwnerCommentDiv>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ContainerCommet>

      <ContainerCommet>
        <OwnerCommentDiv>
          <div>
            <strong>CS</strong>
          </div>
          <strong>Camila Silva</strong>
          <span>há 1 mês</span>
        </OwnerCommentDiv>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ContainerCommet>
    </ArticleStyled>
  );
};

export default CardComment;
