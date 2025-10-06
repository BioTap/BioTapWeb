"use client"
import Image from "next/image"
import TeamFounder from "./TeamFounder"
import team_data from "@/data/TeamData";
import Link from "next/link";

import team_bg from "@/assets/img/update/bg/bg-gradient1-1.jpg"

const Team = () => {

   return (
      <div className="pt-130 pb-140 overflow-hidden position-relative z-index-common">
         <div className="bg-gradient-3">
            <Image src={team_bg} alt="img" />
         </div>
         <TeamFounder />

         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="filter-active-cat1">
                     {team_data.map((item) => (
                        <div key={item.id} className={`team-tab-content filter-item ${item.category}`}>
                           <ul className="team-tab-list">
                              {item.team_data.map((t_item) => (
                                 <li key={t_item.id}>
                                    <div className="team-card">
                                       <div className="team-card_img">
                                          <Image src={t_item.thumb} alt="Team Image" />
                                          <div className="social-btn">
                                             <Link href="https://www.linkedin.com/">
                                                <i className="fab fa-linkedin"></i>
                                             </Link>
                                          </div>
                                       </div>
                                       <div className="team-card_content">
                                          <h3 className="team-card_title"><Link href="#">{t_item.name}</Link></h3>
                                       </div>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Team