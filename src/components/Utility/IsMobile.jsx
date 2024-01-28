import React, { useState, useEffect } from "react";

function isMobile() {
  // Check if the user agent contains keywords typically found in mobile devices
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default isMobile;
