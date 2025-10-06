import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Wrapper from "@/layouts/Wrapper";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumb from "@/component/common/Breadcrumb";
import BlogDetailsArea from "@/component/blogs/blog-details/BlogDetailsArea";
import DocumentArea from "@/component/common/DocumentArea";
import FooterThree from "@/layouts/footers/FooterThree";

import blog_data from "@/data/BlogData";

// ⚙️ Page metadata
export const metadata: Metadata = {
   title: "Blog Details IKO – ICO & Crypto Landing Page React Template",
};

type Props = {
   params: Promise<{ id: string[] }>;
};

export default async function Page({ params }: Props) {
   
   const { id } = await params;
   const blogId = id[0];

   const single_blog = blog_data.find((item) => String(item.id) === blogId);

   if (!single_blog) {
      notFound();
   }

   return (
      <Wrapper>
         <HeaderThree />
         <main>
            <Breadcrumb title="Blog Details" />
            <BlogDetailsArea single_blog={single_blog} key={single_blog.id} />
            <DocumentArea />
            <FooterThree />
         </main>
      </Wrapper>
   );
}
