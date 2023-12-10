"use client";

import { Button } from "@mui/material";
import React from "react";
import Menu from "@/assets/slide2.jpg";
import Menu2 from "@/assets/slide3.jpg";
import Image from "next/image";

const ColumnTab = () => {
  const menuArr = ["탕", "안주", "시즌별", "스페셜"];
  return (
    <div className="menu_wrap">
      <div className="menu_tab">
        {menuArr.map((menu) => (
          <Button key={menu}>{menu}</Button>
        ))}
      </div>
      <div className="menu_desc">
        <div className="menu_content">
          <div className="menu_image">
            <Image src={Menu} alt="menu1" />
          </div>
          <p className="menu_name">순대국</p>
        </div>
        <div className="menu_content">
          <div className="menu_image">
            <Image src={Menu2} alt="menu2" />
          </div>
          <p className="menu_name">소고기</p>
        </div>
      </div>
    </div>
  );
};

export default ColumnTab;
