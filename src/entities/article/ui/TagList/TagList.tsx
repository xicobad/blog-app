import * as S from "./styles";

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <S.TagListWrapper>
      {tags.map((tag) => (
        <S.Tag key={tag}>{tag}</S.Tag>
      ))}
    </S.TagListWrapper>
  );
};

export default TagList;
