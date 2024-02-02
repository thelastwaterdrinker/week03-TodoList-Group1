"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

function TabMenu({ items }: { items: TabItem[] }) {
  const [activeTab, setActiveTab] = React.useState(items[0].value);

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        placeholder={"activeTab"}
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {items.map(({ label, value }) => (
          <Tab
            placeholder={"value"}
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {items.map(({ value, content }) => (
          <TabPanel key={value} value={value}>
            {content}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default TabMenu;
