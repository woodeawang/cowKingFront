"use client";

import { Button } from "@mui/material";
import React from "react";
import Menu from "@/assets/menu2.png";
import Menu2 from "@/assets/menu3.png";
import Image from "next/image";

const ColumnTab = () => {
  const menuArr = ["탕", "안주", "시즌별", "스페셜"];
  return (
    <div className="menu_wrap">
      <div className="menu_tab">
        {menuArr.map((menu) => (
          <Button key={menu} style={{ padding: "5px 20px", background: "#d9d9d9" }}>
            {menu}
          </Button>
        ))}
      </div>
      <div className="menu_desc">
        <div className="menu_content">
          <div className="menu_image">
            <Image src={Menu} alt="menu1" />
          </div>
          <p className="menu_name">한우 해장국</p>
        </div>
        <div className="menu_content">
          <div className="menu_image">
            <Image src={Menu2} alt="menu2" />
          </div>
          <p className="menu_name">명품 순댓국</p>
        </div>
      </div>
      <div className="menu_desc">
        <div className="menu_content">
          <div className="menu_image">
            <Image src={Menu} alt="menu1" />
          </div>
          <p className="menu_name">한우 해장국</p>
        </div>
        <div className="menu_content">
          <div className="menu_image">
            <Image src={Menu2} alt="menu2" />
          </div>
          <p className="menu_name">명품 순댓국</p>
        </div>
      </div>
    </div>
  );
};

export default ColumnTab;
