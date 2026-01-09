import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20 md:py-32 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl sm:text-8xl font-medium text-foreground/20 mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium mb-4">
            ページが見つかりません
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            お探しのページは存在しないか、
            <br />
            移動または削除された可能性があります。
          </p>
          <Button asChild>
            <Link href="/">トップページへ戻る</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

