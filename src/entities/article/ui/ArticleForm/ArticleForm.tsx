import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import * as S from "./styles";
import FormInput from "@shared/ui/form/FormInput";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  body: z.string().min(1, "Text is required"),
});

interface Props {
  initialValues?: ArticleFormData;
  onSubmit: (data: ArticleFormData) => void;
  isLoading?: boolean;
}

const ArticleForm: React.FC<Props> = ({
  initialValues,
  onSubmit,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(schema),
    defaultValues: initialValues ?? {
      title: "",
      description: "",
      body: "",
    },
  });

  const [tags, setTags] = useState<string[]>(initialValues?.tagList || []);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const submitForm = (data: ArticleFormData) => {
    onSubmit({ ...data, tagList: tags });
  };

  return (
    <S.Form onSubmit={handleSubmit(submitForm)}>
      <S.Title>Create new article</S.Title>

      <FormInput
        label="Title"
        placeholder="Title"
        {...register("title")}
        error={errors.title?.message}
      />

      <FormInput
        label="Short description"
        placeholder="Short description"
        {...register("description")}
        error={errors.description?.message}
      />

      <S.Label>Text</S.Label>
      <S.Textarea placeholder="Text" {...register("body")} />
      {errors.body && <S.Error>{errors.body.message}</S.Error>}

      <S.Label>Tags</S.Label>
      <S.Tags>
        {tags.map((tag) => (
          <S.TagItem key={tag}>
            <S.TagInput value={tag} disabled />
            <S.DeleteButton type="button" onClick={() => handleRemoveTag(tag)}>
              Delete
            </S.DeleteButton>
          </S.TagItem>
        ))}

        <S.TagItem>
          <S.TagInput
            placeholder="Tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
          <S.AddButton type="button" onClick={handleAddTag}>
            Add tag
          </S.AddButton>
        </S.TagItem>
      </S.Tags>

      <S.SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </S.SubmitButton>
    </S.Form>
  );
};

export default ArticleForm;
export type ArticleFormData = z.infer<typeof schema> & {
  tagList?: string[];
};
