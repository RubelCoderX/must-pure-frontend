import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/Shared/Sidebar";
import { categories } from "../categories";
import { useLocation } from "react-router";
import useAxiosPublic from "@/Hooks/Fetcher/useAxiosPublic";
const featuredArticles = [
  "শাইখ আসিম আল-রাকারাফি : জাহিলিয়্যাত জীবন চিন্তা",
  "সালাফদের আক্বিদাহ : শিরকের ভয়াবহ অধ্যায়",
  "টাইটিল দুই : আকিদাহ্‌ ও নির্দিষ্ট ভালবাসার সাথে শার্থক না-করা",
  "সেকুলার বুদ্ধিজীবী সমাজ এবং আমাদের কর্তব্য",
  "শাইখ আবুল্লাহ মুসা জিতবিন : এক নিয়মস চরিত্র",
];

export default function AllArticle() {
  const [currentPage, setCurrentPage] = useState(1);
  const { state } = useLocation();
  const [articles, setArticles] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [catId, setId] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      const res = await axiosPublic(
        `/api/get-sub-category-wise-article/${state.id}?page=${currentPage}`
      );
      setArticles(res.data.articleData);
      setLoader(false);
    };

    const inititalFetchData = async () => {
      const res = await axiosPublic(`/api/get-all-article-list?page=${currentPage}`);
      setArticles(res.data.articleData);
      setLoader(false);
    };
    if (state) {
      fetchData();
    } else{
      inititalFetchData()
    }
  }, [state, currentPage]);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      const res = await axiosPublic(
        `/api/get-sub-category-wise-article/${catId}?page=${currentPage}`
      );
      setArticles(res.data.articleData);
      setLoader(false);
    };
    if (state) {
      fetchData();
    }
  }, [catId, currentPage]);

  return (
    <div className="max_width ">
      <div className="flex flex-col md:flex-row gap-6 pt-10">
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles?.data?.map((article) => (
              <ArticleCard key={article.id} article={article} loader={loader} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center my-4">
            <div className="flex items-center">
              {articles?.links.map((page, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setCurrentPage(parseInt(page.url.split("=").pop()))
                  }
                  className={`w-8 h-8 flex items-center justify-center mx-1 rounded ${
                    page.active
                      ? "bg-blue-900 text-white"
                      : "bg-white text-gray-600 border"
                  }`}
                >
                  {idx === 0 ? (
                    <ChevronLeft
                      size={16}
                      className={` ${page.active || "cursor-not-allowed"}`}
                    />
                  ) : idx === articles.links.length - 1 ? (
                    <ChevronRight
                      size={16}
                      className={`${page.active || "cursor-not-allowed"}`}
                    />
                  ) : (
                    page.label
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar
          categories={categories}
          featuredArticles={featuredArticles}
          setId={setId}
        />
      </div>
    </div>
  );
}
