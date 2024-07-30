import CollectionContent from "@/components/collection-content/collection-content";
import { GetCollectionItemData } from "@/lib/getCollectionItemData";
import fs from "fs";
import matter from "gray-matter";

interface CollectionItemPageProps {
  params: {
    collectionItemSlug: string;
  };
}

export default async function CollectionItemPage({
  params,
}: CollectionItemPageProps) {
  const collectionItemData = await GetCollectionItemData(
    params.collectionItemSlug,
  );

  return (
    <main className="flex min-h-screen flex-col items-center bg-vegeta p-24 text-white">
      <CollectionContent collectionItemData={collectionItemData} />
    </main>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  // Get files in the "collectionItems" folder
  const filesInCollectionItemsFolder = fs.readdirSync(
    "src/content/collection-items",
  );

  // Get the slug for each collectionItem
  const collectionItemSlugs = filesInCollectionItemsFolder.map((filename) => {
    const file = fs.readFileSync(
      `src/content/collection-items/${filename}`,
      "utf8",
    );
    const matterData = matter(file);
    return {
      collectionItemSlug: `${(matterData.data.slug as string).startsWith("/") ? matterData.data.slug.substring(1) : matterData.data.slug}`,
    };
  });

  return collectionItemSlugs;
}
