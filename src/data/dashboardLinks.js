export const sidebarLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: "VscHome",
    },
    {
      id: 2,
      name: "Product",
      path: "/dashboard/product",
      icon: "VscPackage",
      children: [
        // Add children if "Product" has sub-links
        {
          id: 21,
          name: "Add Product",
          path: "/dashboard/product/add",
        },
        {
          id: 22,
          name: "Manage Products",
          path: "/dashboard/product/manage",
        },
      ],
    },
    {
      id: 3,
      name: "Orders",
      path: "/dashboard/orders",
      icon: "VscListUnordered",
    },
    {
      id: 4,
      name: "Return & Exchange",
      path: "/dashboard/return-exchange",
      icon: "VscSync",
    },
    {
      id: 5,
      name: "Penalties",
      path: "/dashboard/penalties",
      icon: "VscWarning",
    },
    {
      id: 6,
      name: "Your Wallet",
      path: "/dashboard/wallet",
      icon: "VscCreditCard",
    },
    {
      id: 7,
      name: "Coupon",
      path: "/dashboard/coupon",
      icon: "VscTag",
    },
    {
      id: 8,
      name: "Shop Setting",
      path: "/dashboard/shop-setting",
      icon: "VscGear",
    },
    {
      id: 9,
      name: "Uploaded Files",
      path: "/dashboard/uploaded-files",
      icon: "VscCloudUpload",
    },
    {
      id: 10,
      name: "Admin Message",
      path: "/dashboard/admin-message",
      icon: "VscMail",
    },
    {
      id: 11,
      name: "Support",
      path: "/dashboard/support",
      icon: "VscComment",
    },
    {
      id: 12,
      name: "FAQ & Update",
      path: "/dashboard/faq-update",
      icon: "VscQuestion",
    },
];
  