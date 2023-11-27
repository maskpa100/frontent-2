import Comments from "@/components/Comments/Comments";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";

export default function CommentsPage({
  params,
}: {
  params: { postId: number };
}) {
  return (
    <PageWrapper>
      <Comments postId={params.postId} />
    </PageWrapper>
  );
}
