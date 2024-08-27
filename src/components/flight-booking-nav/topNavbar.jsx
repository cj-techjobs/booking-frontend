import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useRouter } from "next/navigation";

const FlightNavbar = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <AppBar
        position="static"
        className="bg-white w-full shadow-none sticky top-[84px] z-20"
      >
        <Toolbar className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <ArrowBackRoundedIcon
              className="text-gray-400 cursor-pointer"
              onClick={() => router.push("/bookings/flight-search")}
            />
            <Box className="flex flex-col">
              <Typography variant="h6" className="text-black font-semibold">
                Mwanza - Dar es Salaam
              </Typography>
              <span className="text-gray-500 text-xs">
                16 Jun | 1 Adult | Economy
              </span>
            </Box>
          </div>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            className="min-w-fit"
            TabIndicatorProps={{ className: "bg-transparent" }}
            sx={{
              ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root ": {
                padding: "8px 8px",
              },
            }}
          >
            <Tab
              label={
                <div className="flex flex-col items-center justify-center text-xs">
                  <span
                    className={`${
                      selectedTab === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    Sun, Jun 16
                  </span>
                  <span
                    className={`${
                      selectedTab === 0 ? "text-white" : "text-green-400"
                    }`}
                  >
                    ₹ 1999
                  </span>
                </div>
              }
              className={`${
                selectedTab === 0 ? "rounded-lg bg-blue-500 " : ""
              } min-w-fit`}
            />
            <Tab
              label={
                <div className="flex flex-col items-center justify-center text-xs">
                  <span
                    className={`${
                      selectedTab === 1 ? "text-white" : "text-black"
                    }`}
                  >
                    Mon, Jun 17
                  </span>
                  <span
                    className={`${
                      selectedTab === 1 ? "text-white" : "text-green-400"
                    }`}
                  >
                    ₹ 1599
                  </span>
                </div>
              }
              className={`${
                selectedTab === 1 ? "rounded-lg bg-blue-500 " : ""
              } min-w-fit`}
            />
            <Tab
              label={
                <div className="flex flex-col items-center justify-center text-xs">
                  <span
                    className={`${
                      selectedTab === 2 ? "text-white" : "text-black"
                    }`}
                  >
                    Tue, Jun 18
                  </span>
                  <span
                    className={`${
                      selectedTab === 2 ? "text-white" : "text-green-400"
                    }`}
                  >
                    ₹ 1299
                  </span>
                </div>
              }
              className={`${
                selectedTab === 2 ? "rounded-lg bg-blue-500 " : ""
              } min-w-fit`}
            />
            <Tab
              label={
                <div className="flex flex-col items-center justify-center text-xs">
                  <span
                    className={`${
                      selectedTab === 3 ? "text-white" : "text-black"
                    }`}
                  >
                    Wed, Jun 19
                  </span>
                  <span
                    className={`${
                      selectedTab === 3 ? "text-white" : "text-green-400"
                    }`}
                  >
                    ₹ 2599
                  </span>
                </div>
              }
              className={`${
                selectedTab === 3 ? "rounded-lg bg-blue-500 " : ""
              } min-w-fit`}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FlightNavbar;
