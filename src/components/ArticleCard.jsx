/* eslint-disable react/prop-types */

import { BasicContext } from "@/ContextApi/BasicProvider";
import { button } from "@/Utils/Class/button";
import Loader2 from "@/Utils/Loader/Loader2";
import  {url}  from "../../connection";
import { ArrowRight, Clock, User } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";

const ArticleCard = ({ article, loader }) => {
  const { ln } = useContext(BasicContext);
  const imgUrl = `${url}/storage/uploads/articleImg/`

  if(loader) return <Loader2 />
  return (
    <div
      className="rounded-lg overflow-hidden bg-color_3 shadow-[0_0_15px_3px_rgba(0,0,0,0.2)] dark:shadow-[#5f5292a6] dark:bg-dark_color_3 group animate-reveal"
      style={{
        animationDelay: `${article.id * 100}ms`,
      }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg aspect-[16/9]">
        <img
          src={`${imgUrl+article.photo}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-color_2 text-color_4 px-3 py-1 text-sm font-semibold rounded">
            {ln === "bn"
              ? article?.blog_category_data?.category_name_bn
              : article?.blog_category_data?.category_name}
          </span>
        </div>
      </div>
      <div className="px-5 pb-10">
        <div>
          <h3 className="text-xl font-bold mb-2 dark:text-dark_color_2 group-hover:text-color_1 transition-colors">
            {ln === "bn" ? article?.title_bn : article?.title}
          </h3>
          <p dangerouslySetInnerHTML={{__html: ln === "bn" ? article?.post_bn : article?.post}} className="text-gray-600 dark:text-dark_color_4 mb-4 line-clamp-4">
          
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-dark_color_4 mb-4">
            <User size={16} className="mr-1 mb-1" />
            <span className="mr-3">{ln === "bn" ? article?.writer_bn : article?.writer}</span>
            <Clock size={16} className="mr-1 mb-1" />
            <span>{article.created_at}</span>
          </div>
        </div>
        <Link to={`/details/${article.id}`} className={`${button.form}`}>
          Read more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
