"use client";

import { Button } from "@mui/material";
import React from "react";

const ColumnTab = () => {
  const menuArr = ["탕", "안주", "시즌별", "스페셜"];
  return (
    <div className="menu_wrap">
      <div className="menu_tab">
        {menuArr.map((menu) => (
          <Button key={menu}>{menu}</Button>
        ))}
      </div>
      <div className="menu_desc"></div>
    </div>
  );
};

export default ColumnTab;
